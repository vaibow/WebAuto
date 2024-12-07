const { run } = require('@wdio/cli');

async function runTests() {
  try {
    await run({
      configFile: './wdio.conf.js'
    });
  } catch (error) {
    console.error('Error running tests:', error);
  }
}

module.exports = { runTests };