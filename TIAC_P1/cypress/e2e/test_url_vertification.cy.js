describe('URL verification', () => {
    beforeEach(() => {

        cy.visit('https://opensource-demo.orangehrmlive.com');
    });

    it('should_have_the_correct_URL', () => {
        //vertifikujemo url

        //pisemo koji url zelimo da testiramo da li baca na onaj zeljeni 
        cy.visit('https://opensource-demo.orangehrmlive.com/');


        //ovde pisemo url koji ocekujemo da test pogodi
        cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    });

    it('invalid_URL_verification', () => {

        //pisemo invalid url
        cy.visit('https://docs.cypress.io/api/commands/intercept');

        // ovde pisemo url koji zelimo da pogodimo
        cy.url().should('not.eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', 'Invalid url my boy');

    });

    //da nam sadrzi taj ali kako da proverim kada idemo sa jedne na drugu
    //cy.url().should('contain', 'dashboard')

    

});
