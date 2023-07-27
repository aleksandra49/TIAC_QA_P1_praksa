describe('add_delete_employee', () => {

    //da u ovoj promenljivi sacuvaj id usera
    let userId

    beforeEach('open application', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/')

        cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    })

    it('add_delete_employe', () => {

        cy.get('input[name=username]').clear().type('Admin')

        cy.get('input[name=password]').clear().type('admin123')

        cy.get('button[type=submit]').click()

        //to mi znaci provera da bi trebao da sadrzii
        //cy.url().should('contain', 'dashboard')
        //cy.get('.oxd-main-menu .oxd-main-menu-item-wrapper ').click()
        cy.contains('PIM').click()

        cy.contains('Add Employee').click()

        cy.get('input[name=firstName]').clear().type('Anja')

        cy.get('input[name=lastName]').clear().type('anja')

        //sacuvaj userID kao varijablu
        //cy.
        //cy.intercept('POST', '/api/login').as('loginRequest');

        /*cy.wait('@loginRequest').then((interception) => {
            const response = interception.response;
            const userId = response.body.userId;*/ // Assuming the user ID is present in the response

        // Store the user ID in the userId variable
        //cy.wrap(userId).as('userId');
        //danass pokazao Valadan
        cy.get('.oxd-grid-item.oxd-grid-item--gutters').eq('1').find('input')

        //sacuvaj novog korisnik
        cy.get('button[type=submit]').click()
        //nemam pojma sta sa ovim
        //
        /*cy.get('td > a').invoke('text').then((text) => {
            userId = text; // Save the user ID value
            cy.wrap(userId).as('userId'); // Store the user ID in the 'userId' alias
        });*/

        //baci nas na listu zaposelnih klikni na to
        cy.contains('Employee List').click()

        //unosimo id
        //sliakla od mentora proveri za koji deo id je
        //chatgpt lepo objasnio
        cy.get('label').contains('Employee Id').parent().next().find('input').invoke('val').as('val')
        cy.get('@val').then(($userId) => {
            userId = $userId.toString()
            console.log("User ID : ", userId)
        })

        
        //unosimo id

        //new today 20.7.
        //let extractedText;

        //cy.get('.oxd-table-filter-area .oxd-input')
        // Locate the element containing the desired text and extract it
        /*cy.get('.oxd-table-filter-area .oxd-input')
            .invoke('text')
            .then((text) => {
                // 'text' now holds the extracted text, 'Hello, Cypress!' in this case
                extractedText = text.trim();
            });*/

        // You can add other Cypress commands here if needed.

        // Later in the test, use the extracted text for searching or any other purpose
        // For example, enter the extracted text into a search input and perform a search
        //cy.get('input[type="search"]').type(extractedText);
        //cy.get('button[type="submit"]').click();

        /*cy.get('@val').then(($userId) => {
            const userId = $userid.text();
            cy.get('input.oxd-input').clear().type(userId);
            cy.get('button[type=submit]').click(); // Assuming a search button is present and triggers the search action
          });*/
        //            
        /*cy.get('@userId').then((userId) => {
            cy.get('input.oxd-input.oxd-input--active').type(userId);
            cy.get('button[type="submit"]').click(); // Assuming a search button is present and triggers the search action
        });*/
        /*cy.get('@userId').then((userId) => {
            cy.get('input.oxd-input--active').type(userId);

            //cy.get('input.oxd-input').type(userId);
            cy.get('button[type="submit"]').click(); // Assuming a search button is present and triggers the search action
        });*/
        //cy.get('input[oxd-input]').clear().type('userId')

        //search button
        //cy.get('button[type=submit]').click()

        //izbrisi usera iz tabele
        //selektovati tj nekako selektovati
        //cy.get('button[type=button]').click()

        //proveri da li je obrisan vertifikuj
        cy.get('.orangehrm-container').should('contain.text', 'Anja')
        //cy.get('.deleted-element').should('not.exist');


    })

    xit('ima_li_boga', () => {
        //kaze da ne mzoe da nadje ga
        cy.get('.orangehrm-container').should('not.contain.text', 'Anja')
        //cy.get('.orangehrm-login-title').should('not.contain.text','Invalid text Garry')
        //cy.get('.orangehrm-login-title').should('not.contain.text','Login')

    })


    /*zadatak jedan test D-done E-error N-not done
    Otvori aplikaciju D
    Login sa adminom  D
    Idi na PIM D
    Idi na Add Employee D
    Unesi Ime i prezime D
    Sacuvaj ID u varijablu
    Idi na Employee listu
    Ukucaj ID i clikni na search dugme
    Iz tabele obrisati usera
    Verifikovati da je user obrisan*/


})