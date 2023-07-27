// Imports
const { Given, Then } = require("@badeball/cypress-cucumber-preprocessor");

import loginPage from "././../page_objects/login_pagee.js";

// Variables
const login = new loginPage();

//Given methods (Actions) - In which state app should be
Given(/^I am on the login page$/, function () {
  login.openApp();
});

Given(/^I enter valid username "(.*)"$/, function (username) {
  login.enterUsername(username);
});

Given(/^I enter valid password "(.*)"$/, function (password) {
  login.enterPassword(password);
});

Given(/^I click on the submit button$/, function () {
  login.enterSubmitButton();
});

//THEN methods (Assertions)
Then(/^Verify that user is login in application$/, function () {
  login.verifyTitle().should("contain", "Dashboard");
});

/*Then(/^Then I should see a question mark icon in application$/, function(){
  login.verifyQuestionMarkIcon().should('be.visible')
  //cy.get('.question-icon').should('be.visible');
});*/



/*const { Then, Given } = require('@badeball/cypress-cucumber-preprocessor');
import { LoginPage } from '../../support/page_objects/login_page.js'

// Variables
const login = new loginPage();

//Given methods (Actions) - In which state app should be
Given(/^I am on the login page$/, function () {
    login.openLoginPage();
});

Given(/^I enter the username "(.*)$/, function (username) {
    login.enterUsername(username);
});

Given(/^I enter the password "(.*)$/, function (password) {
    login.enterUsername(password);
});

Given(/^I press submit button $/, function (password) {
    login.clickOnSubmit();
});

//THEN methods (Assertions)
Then(/^Verify that we login in application$/, function () {
    login.verifyLogin().should('contain', '');
});*/