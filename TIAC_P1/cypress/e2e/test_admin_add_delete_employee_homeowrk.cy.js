describe('add_delete_employee', () => {

    //da u ovoj promenljivi sacuvaj id usera, ne koristim nigde
    let userId
    //Otvori aplikaciju

    beforeEach('open application', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/')

        cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    })

    it('add_delete_employe', () => {
        //Login sa adminom
        cy.get('input[name=username]').clear().type('Admin')

        //Login sa adminom
        cy.get('input[name=password]').clear().type('admin123')

        //Login sa adminom
        cy.get('button[type=submit]').click()
        
        //Idi na PIM
        cy.contains('PIM').click()

        //Idi na Add Employee
        cy.contains('Add Employee').click()

        //Unesi Ime i prezime
        cy.get('input[name=firstName]').clear().type('Vladan')

        //Unesi Ime i prezime
        cy.get('input[name=lastName]').clear().type('Nenadic')
    
        //Sacuvaj ID u varijablu, Srdjan napisao ovaj deo
        cy.get('input.oxd-input.oxd-input--active').last().invoke('val').then((value)=> {
            const id = String(value)
            cy.wrap(id).as('val')
        })

        /*
        //sliakla od mentora proveri za koji deo id je
        //chatgpt lepo objasnio
        cy.get('label').contains('Employee Id').parent().next().find('input').invoke('val').as('val')
        cy.get('@val').then(($userId) => {
            userId = $userId.toString()
            console.log("User ID : ", userId)
        })*/
        
        //stisni click save dugme kod add employe
        cy.get('button[type=submit]').click()

        //Idi na Employee listu
        cy.contains('Employee List').click()
        cy.get('@val').then((id) => {
            //enter ce biti umesto click na dugme
            cy.get('.oxd-grid-item.oxd-grid-item--gutters').eq('1').find('input').type(id + '{enter}')
        })
        //vertifikacija da je odradjen delete
        cy.intercept('DELETE', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees').as('delete_user')

        //delete button
        cy.get('button[type="button"]').eq(4).click()
        //potvrda da oces da obrises
        cy.get('button[type="button"]').eq(7).click()

        cy.wait('@delete_user').its('response.statusCode').should('eq', 200)

    })

    /*zadatak jedan test SVE RADI
    Otvori aplikaciju 
    Login sa adminom  
    Idi na PIM 
    Idi na Add Employee 
    Unesi Ime i prezime 
    Sacuvaj ID u varijablu
    Idi na Employee listu
    Ukucaj ID i clikni na search dugme
    Iz tabele obrisati usera
    Verifikovati da je user obrisan*/
})