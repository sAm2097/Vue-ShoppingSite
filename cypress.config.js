const { defineConfig } = require('cypress')

module.exports = defineConfig({
  fixturesFolder: 'tests/e2e/fixtures',
  screenshotsFolder: 'tests/e2e/screenshots',
  videosFolder: 'tests/e2e/videos',
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./tests/e2e/plugins/index.js')(on, config)
    },
    specPattern: 'tests/e2e/specs/**/*.cy.js',
    supportFile: 'tests/e2e/support/index.js',
  },
})