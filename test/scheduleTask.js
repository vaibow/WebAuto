const cron = require('node-cron');
const { runTests } = require('./runTests');
const { generateCucumberReport } = require('./generateReport');
const { sendTestExecutionEmail } = require('./sendEmail');

async function runDailyTestAndSendEmail() {
  try {
    // Run the tests
    await runTests();

    // Generate the report
    generateCucumberReport();

    // Read the test results from the report file
    const testResults = await fs.promises.readFile('report.json', 'utf8');

    // Send the email with the test results
    await sendTestExecutionEmail(testResults);
  } catch (error) {
    console.error('Error running tests or sending email:', error);
  }
}

// Schedule the task to run daily at 10:00 AM
cron.schedule('0 17 22 * *', runDailyTestAndSendEmail);