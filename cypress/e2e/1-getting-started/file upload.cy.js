/// <reference types="cypress" />

// const cypress = require("cypress")

// describe('Upload a file from local', () => {
//     it('upload file locator', () => {
//       cy.addingPath('cypress/fixtures/E-commerce Website Test -- test website (1).png');
//     });
//   });


  describe('Upload a file from local',()=>
    {
       it.skip('upload file locator',()=>{
     
        cy.addingPath('cypress/fixtures/E-commerce Website Test -- test website (1).png')
    
       })



   it.skip('radio button handing',()=>{
   
    cy.visit(Cypress.env('base_url'))

    cy.get(':nth-child(9) > #buttons').click()
    
    cy.get('#radio-buttons').click()

    cy.get('#content>.form-check>#radio-button2').click().should('be.visible','Radio button 2')

   })



   it.only('new tab automation',()=>{

    cy.visit(Cypress.env('base_url'))
 
   cy.get(':nth-child(10) > #buttons').click()

    cy.get('#browser-tab').click().should('have.attr','href')

    cy.get('#newTabBtn>a').invoke('removeAttr','target').click()

   cy.url().should('include','/web-table')

    cy.get('#content>.table tr:nth-child(2) td:nth-child(2)').invoke('text').then((text)=>{  
     cy.log(text)
    })
   })
  })


