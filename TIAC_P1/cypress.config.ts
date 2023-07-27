import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor';
import { defineConfig } from 'cypress';

const setupNodeEvents = async (
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions
): Promise<Cypress.PluginConfigOptions> => {
  await addCucumberPreprocessorPlugin(on, config);
  require('./cypress/plugins/index.ts').default(on, config);
  return config;
};

export default defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  chromeWebSecurity: false,
  defaultCommandTimeout: 20000,
  requestTimeout: 20000,
  //animationDistanceThreshold: 50,
  //reporter: 'cypress-mochawesome-reporter',
  e2e: {
    //setupNodeEvents(on, config) {
    //kada oces da pozivas nesto
    //require('cypress-mochawesome-reporter/plugin')(on);
    // },
    baseUrl: 'https://opensource-demo.orangehrmlive.com/',
    //baseUrl: 'http://localhost:4200/',
    //sluzi za js fajlove da pokrene tj kada ovo iskljucimo nece nma izaci testovi
    specPattern: ['cypress/e2e/**/*.cy.{js,jsx,ts,tsx}'],
    //sluzi za cucumber klase kada se pokrece isto kao ovo gore za js
    //specPattern: 'cypress/features/**/*.feature',
    setupNodeEvents,
  },
});