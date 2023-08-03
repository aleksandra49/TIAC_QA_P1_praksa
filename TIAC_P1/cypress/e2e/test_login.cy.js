describe('login', () => {

    //preduslov pre starta testova
    beforeEach('open application', () => {
        //otvaranje pregledaca i navigacije na odredjen link
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        //vertifikacija url
        cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    })
    //PAZI NA FORMATIRANJE KODA I TO HOCE DA POREMETI RAD TESTOVA
    //IMAS OPCIJU DESNI KLIK I DA FORMATIRAS CEO KOD

    //stavimo x ispred testa znaci da njega preskoci da ga ne odradi

    xit('admin_login_valid', () => {
        //
        cy.get('input[name=username]').clear().type('Admin')
        //
        cy.get('input[name=password]').clear().type('admin123')

        //
        cy.get('button[type=submit]').click()
        //to mi znaci provera da bi trebao da sadrzii
        cy.url().should('contain', 'dashboard')
        //
        cy.get('.oxd-brand-banner').find('img').should('be.visible')

        cy.get('.bi-question-lg').should('be.visible')

    })

    //testiramo podate u cypress prozoru, tj sam ce on da ih automatski posle save pokrenuti
    //pisace da li je prosao test ili nije

    //test sa drugim podacima korisnika testirammo kada nisu validni podaci
    //ovo je assert
    it('admin_login_invalid', () => {
        //
        cy.get('input[name=username]').clear().type('Zika')
        //
        cy.get('input[name=password]').type('hello')

        //
        cy.get('button[type=submit]').click()

        //role alert je sa stranice tamo gde se nalazi poruka kada pogresno se logujes,
        //u html fajlu, tj na inspect pogledaj
        //.should('contain.text', tacno kaze gde je ocekivao i sta je ocekivao da dobije pise u hromu cypressa

        cy.get('[role="alert"]').should('contain.text', 'Invalid credentials')
    })


    //3 dan


    /*it('admin_login_valid', () => {
        cy.fixture('test_items').then(data => {
            const testdata = data
            const admin_username = testdata.credentials.admin_username;
            const admin_password = testdata.credentials.admin_password;
            cy.get('input[name=username]').clear().type(admin_username)
            cy.get('input[name=password]').clear().type(admin_password)
            cy.get('button[type=submit]').click()
        })
    })*/





    //ja probala ne radi

    xit('login_intercept', () => {
        //
        cy.get('input[name=username]').clear().type('Admin')
        //
        cy.get('input[name=password]').clear().type('admin123')       

        cy.get('button[type=submit]').click()
        //
        cy.url().should('contain', 'dashboard')
        //
        cy.get('.oxd-brand-banner').find('img').should('be.visible')
        //ne ovo je kada udjemo i on odmah nam prikaze dashboard zato ne radi
        //cy.url().should('contain', 'orangehrm-dashboard-widget-header')

        cy.get('.oxd-sidepanel').should('contain', '.oxd-main-menu-search')
        

        cy.intercept('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers')

        cy.intercept('GET', '/admin/viewSystemUsers').as('getAllUsers')

        cy.intercept({
            pathname: '/search',
            query: {
              q: 'Time',
            },
          }).as('searchForTerms')

    })


});