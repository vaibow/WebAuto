const { generate } = require('cucumber-html-reporter');

function generateCucumberReport() {
  const options = {
    theme: 'bootstrap',
    jsonFile: 'report.json',
    output: 'cucumber_report.html',
    reportSuiteAsScenarios: true,
    launchReport: true,
    metadata: {
      'App Version': '1.0.0',
      'Test Environment': 'STAGING',
      'Browser': 'Chrome 83.0.4103.116',
      'Platform': 'Windows 10'
    }
  };

  generate(options);
}

module.exports = generateCucumberReport;