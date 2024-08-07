// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })





Cypress.Commands.add('loginpage',(emailaddress,Password)=>{
    cy.get('#emailHelp > b:nth-child(2)').invoke('text').then((text)=>{
        emailaddress=text; // we are extraxcting the text from the page and assinging it to the existing variable
        cy.get('#email').type(emailaddress);
        cy.get('#password').type(Password);
        cy.get('#submitLoginBtn').click();
        cy.get('')
      });
})



Cypress.Commands.add('addingPath',(Path)=>{
    cy.visit('https://qa-practice.netlify.app/auth_ecommerce.html');
    cy.get('#file-upload-item').click()
    cy.get('#file_upload').selectFile(Path);
    cy.get('.custom-file > .btn')  . click()
    cy.get('#file_upload_response').should('be.visible','You have successfully uploaded ""')
})


Cypress.Commands.add('Emportal',(Email,Password)=>{

 cy.get('#username').type(Email)
 cy.get('#password').type(Password)

 cy.wait(20000)
 cy.get('[type=submit]').click()


})


Cypress.Commands.add('Flip',()=>{

    cy.visit('https://www.flipkart.com/')

    cy.get("._2SmNnR > .Pke_EE ").click()

    cy.get("._2SmNnR > .Pke_EE ").type('iphone15')

    cy.get('a.oleBil div div._2GaeWJ').click()
})