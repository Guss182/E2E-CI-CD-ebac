const { defineConfig } = require("cypress");
const { allureCypress } = require("allure-cypress/reporter");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      allureCypress(on, config, {
        resultsDir: "allure-results",
      });
      return config;
    },
    baseUrl: process.env.CYPRESS_BASE_URL || "http://lojaebac.ebaconline.art.br/"
  },
  video: true,
  screenshotOnRunFailure: true,

});
