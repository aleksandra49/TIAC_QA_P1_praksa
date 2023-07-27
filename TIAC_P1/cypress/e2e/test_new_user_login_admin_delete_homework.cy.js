describe('new_user_login_admin_delete', () => {

    let userId

    beforeEach('open appliation', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/')

        cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    })


    it('add_new_login_admin_delete_new', () => {
        /*cy.get('input[name=username]').clear().type('Admin')

        cy.get('input[name=password]').clear().type('admin123')

        cy.get('button[type=submit]').click()

        cy.contains('PIM').click()

        cy.contains('Add Employee').click()

        cy.get('input[name=firstName]').clear().type('Milorad')

        cy.get('input[name=middleName]').clear().type('Cypress')

        cy.get('input[name=lastName]').clear().type('Misic')

        cy.get('.oxd-switch-wrapper').click()

        //username
        cy.get('.oxd-form-row').eq(2).find('.oxd-input').type('Mile123');
        //cy.contains('.oxd-form-row', 'Username*').find('.oxd-input').clear().type('mile');
        //cy.get('.oxd-form-row').find('.oxd-input').clear().type('123')
        //cy.get('label').contains('Username*').parent().next().find('input').clear().type('123')

        //password
        cy.get('.user-password-cell').eq(0).find('.oxd-input').type('Mile123');

        //password again
        cy.get('.oxd-input-field-bottom-space').eq(9).find('.oxd-input').type('Mile123');
        //save user
        cy.get('button[type=submit]').click()

        cy.wait(5000)

        //logout  admin tokom pravljenja usera
        cy.get('.oxd-userdropdown-icon').click();
        cy.get('.oxd-userdropdown-link').last().click()

        //login novog
        cy.get('input[name=username]').clear().type('Mile123')
        cy.get('input[name=password]').clear().type('Mile123')
        cy.get('button[type=submit]').click()

        cy.wait(5000)

        //logout novog
        cy.get('.oxd-userdropdown-icon').click();
        cy.get('.oxd-userdropdown-link').last().click()
*/
        //login admina posle novog usera
        cy.get('input[name=username]').clear().type('Admin')
        cy.get('input[name=password]').clear().type('admin123')
        cy.get('button[type=submit]').click()

        cy.contains('PIM').click()

        //cy.get('input[placeholder=Type for hints...]').clear().type('Mile123')
        //cy.get('[placeholder="Type for hints..."]').eq(0).type('Milo');

        //cy.get('[placeholder="Enter your name"]').eq(1).realPress('Milo');

        //chatgpt pomogao
        //ukucaj ime u input ali da ne smara onaj dodatni padajuci search
        cy.get('[placeholder="Type for hints..."]').eq(0).type('Milo', { delay: 0 });
    
        
        //klikni da pretrazi
        cy.get('button[type=submit]').click()

        cy.wait(2000)
//VRATI OVO ZA BRISANJE
        //cy.get('.bi-trash').click()
        //cy.get('.oxd-button--label-danger').click()

//KADA GA OBIRSE DA IDE LOGOUT PA LOGIN OVO SADA NE TREBA
        //cy.get('input[name=username]').clear().type('Admin')
        //cy.get('input[name=password]').clear().type('admin123')
        //cy.get('button[type=submit]').click()


        cy.contains('Admin').click()
        //rade oba
        cy.get('.orangehrm-header-container').contains('Add').click()
        //cy.get('button[type=button]').contains('Add').click()

        //kada je bacilo gresku da nesto prekriva nesto
        // izbacilo ovo oxd-select-option i ona dalo element da bih nalepila
        //ovo je deo za biranje posla admin ili 
        cy.get('.oxd-select-text--after').eq(0).click();
        cy.get('.oxd-select-option').last().click()
        
        //SEARCH ZA zaposlenog
        cy.get('[placeholder="Type for hints..."]').eq(0).type('Milorad', { delay: 0 });
        cy.wait(2000)
        cy.get('.oxd-autocomplete-option').eq(0).click();
        cy.wait(2000)
        //status
        cy.get('.oxd-select-text--after').eq(1).click();
        cy.get('.oxd-select-option').eq(1).click()
        //username 
        cy.get('.oxd-grid-item').eq(3).find('.oxd-input--active').type('Milorad');
        //sifre
        cy.get('input[type=password]').eq(0).clear().type('Mile123')
        cy.get('input[type=password]').eq(1).clear().type('Mile123')

        cy.get('button[type=submit]').click()

        cy.wait(2000)

        //logout
        cy.get('.oxd-userdropdown-icon').click();
        cy.get('.oxd-userdropdown-link').last().click()

        //login newuser
        cy.get('input[name=username]').clear().type('Milorad')
        cy.get('input[name=password]').clear().type('Mile123')
        cy.get('button[type=submit]').click()

        //verifikacija da li se on ulogovao tj assert
        cy.get('.oxd-userdropdown-name').should('contain.text', 'Milorad Misic')

        cy.wait(1000)

        //logout novog usera
        cy.get('.oxd-userdropdown-icon').click();
        cy.get('.oxd-userdropdown-link').last().click()

        //login 
        cy.get('input[name=username]').clear().type('Admin')
        cy.get('input[name=password]').clear().type('admin123')
        cy.get('button[type=submit]').click()

        //da baci na stranicu za search
        cy.contains('Admin').click()

        //za search lada se admin uloguje
        cy.get('.oxd-form .oxd-input').type('Milorad');
        //cy.get('.oxd-form .oxd-input').type('Milorad{enter}');
        //probaj da enter
        cy.wait(2000)
        //cy.get('button[type=submit]').click()
        //cy.get('.oxd-userdropdown-tab').click({ waitForAnimations: false });
        //udara u elemt za logout i to
        cy.get('button[type=submit]').scrollIntoView().should('be.visible').click({waitForAnimations: false});
        //oxd-userdropdown-tab elemnt koji prekriva i ne da da se stisne
        //{enter}

        cy.wait(2000)

        //brisanje
        cy.get('.bi-trash').click()
        cy.get('.oxd-button--label-danger').click()

        


    })

})