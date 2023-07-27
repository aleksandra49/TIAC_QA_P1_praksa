describe('title verification' ,() => {

    before('open application', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
    })

    it('title_valid', () => {
        cy.get('.orangehrm-login-title').should('contain.text', 'Login')

    })

    it('title_invalid', () => {
        //kaze da ne mzoe da nadje ga
        cy.get('.oxd-text.oxd-text--h5.orangehrm-login-title').should('not.contain.text','Invalid text Garry')
        //cy.get('.orangehrm-login-title').should('not.contain.text','Invalid text Garry')
        //cy.get('.orangehrm-login-title').should('not.contain.text','Login')

    })

});