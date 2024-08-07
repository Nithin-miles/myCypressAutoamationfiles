const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    
    },
    defaultCommandTimeout: 5000,
    downloadsFolder:"cypress/downloads",
    screenshotsFolder:"cypress/screenshots",
    fixturesFolder: 'cypress/fixtures/',

  },
});

