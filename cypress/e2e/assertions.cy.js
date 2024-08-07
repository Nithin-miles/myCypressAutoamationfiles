/// <reference types="cypress"/>

describe('HRM WEBSITE', () => {



    it('assertions',()=>{

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        // cy.get (cy.get('.oxd-sheet > :nth-child(1)')).invoke('text').then((text)=>{
        //    const username=text.split[':'][1].trim();
        //    cy.log(`${username}`)
        //     cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').invoke('text').then((text)=>{
        //      const passwords=text.split[':'][1].trim();
        //      cy.log(`${passwords}`)

        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')

        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        
        cy.get('.oxd-button').click();

        cy.get(':nth-child(1) > .oxd-main-menu-item').click();


        cy.get('.orangehrm-header-container > .oxd-button')

        .should('be.visible').and('have.text',' Add ')
        .and('be.enabled')
        expect(true).to.be.true

        assert.equal(4,4,'notequal')
       assert.strictEqual(4,4,"eq")
    
    });
        
    });



