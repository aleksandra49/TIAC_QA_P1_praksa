class LoginPage {
    // Element locators
    USERNAME = "input[name=username]";
    PASSWORD = "input[name=password]";
    SUBMIT = "button[type=submit]";
    TITLE = ".oxd-topbar-header-breadcrumb-module";
    QUESTIONMARICON =".bi-question-lg";
    // Element locator functions
  
    // Methods
    openApp() {
      return cy.visit("/");
    }
  
    enterUsername(username) {
      return cy.get(this.USERNAME).type(username);
    }
  
    enterPassword(pass) {
      return cy.get(this.PASSWORD).type(pass);
    }
  
    enterSubmitButton() {
      return cy.get(this.SUBMIT).click();
    }
  
    verifyTitle() {
      return cy.get(this.TITLE);
    }

    /*verifyQuestionMarkIcon() {
      return cy.get(this.QUESTIONMARICON)//.should('be.visible')
      //cy.get('.question-icon').should('be.visible');
    }*/
  }
  
  export default LoginPage;