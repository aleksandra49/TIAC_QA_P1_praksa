const { onLoginPage } = require("../support/page_objects/login_page")
//const { usnigVerifications } = require("../support/page_objects/verifications")
//const { usnigNavigations } = require("../support/page_objects/navigations")


describe('add_employee', () => {

    //globalna promenljiva
    let testdata
    //let userId nma treba da izbucemo id za onaj zadatak

    before('open application', () => {
        cy.openApp()
        cy.fixture('test_items').then((data) => {
            testdata = data
        })
    })

    it('add/delete employee', () => {
        onLoginPage.login_admin()
        //kako cemo pristupati funkciji koja se nalazi u login_page.js jer se tu nalazi funkcija
        //bukvalno pozivamo tu funkciiju

    })


})