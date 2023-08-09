const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.demoblaze.com/',
    defaultCommandTimeout: 6000,
    pageLoadTimeout: 500000
  },
});
