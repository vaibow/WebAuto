const nodemailer = require('nodemailer');

async function sendTestExecutionEmail(testResults) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'vsp3903@gmail.com',
      pass: 'butterfly@98'
    }
  });

  const mailOptions = {
    from: 'vsp3903@gmail.com',
    to: 'vaebou@gmail.com',
    subject: 'Test Execution Status',
    text: `Test Execution Status:\n${testResults}`
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
  }
}

module.exports = sendTestExecutionEmail;