describe('login', () => {

    //let testdata to su globanlne promenljive koje ne spadaju nigde

    //preduslov pre starta testova
    beforeEach('open application', () => {
        //otvaranje pregledaca i navigacije na odredjen link
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        //vertifikacija url
        cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    })
    //dan 3

    //nema asertaciju tj assert


    it('admin_login_valid', () => {
        cy.fixture('test_items').then(data => {
            const testdata = data
            const admin_username = testdata.credentials.admin_username;
            const admin_password = testdata.credentials.admin_password;
            cy.get('input[name=username]').clear().type(admin_username)
            cy.get('input[name=password]').clear().type(admin_password)
            cy.get('button[type=submit]').click()
        })
    })






});