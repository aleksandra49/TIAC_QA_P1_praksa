describe('chevron', () => {

    before('open application', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    })
    //radi

    it('is_there_chevron', () => {
        cy.get('input[name=username]').clear().type('Admin')

        cy.get('input[name=password]').clear().type('admin123')

        cy.get('button[type=submit]').click()
        //cy.get('button[type=submit]').click()

        //cy.get('[role="none"]').should('contain' , '.bi-chevron-left')
        cy.get('.oxd-main-menu-search i').click()

        

        //cy.get('[role="none"]').should('contain', '.bi-chevron-left')

    })
    //doradi

    it('is_there_chevron_sides', () => {
        cy.get('input[name=username]').clear().type('Admin')

        cy.get('input[name=password]').clear().type('admin123')

        cy.get('button[type=submit]').click()

        cy.get('.oxd-main-menu-search i').click()
        //nesto za button

        cy.get('.oxd-main-menu-search').should('contain', '.bi-chevron-left')

    })
    //ne radi

    xit('is_there_PimIcon', () => {
        cy.get('input[name=username]').clear().type('Admin')

        cy.get('input[name=password]').clear().type('admin123')

        cy.get('button[type=submit]').click()



        //cy.get('[role="none"]').should('contain' , '.bi-chevron-left')
        cy.get('.oxd-main-menu-search .oxd-icon-button oxd-main-menu-button').should('contain', 'i')

    })



});