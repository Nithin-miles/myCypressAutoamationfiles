/// <reference types="cypress" />

describe('ApisCalls',()=>{

it('API',()=>{

// cy.visit(Cypress.env('emportalurl'))
// cy.Emportal('nithin@edvenswatech.com','Nithinedwn#2174')

 cy.request({
          method: 'POST',
          url: 'https://emportal.me:8080/emportal/auth/signin',
          auth: {
            bearer: Cypress.env('token'),  
          },   

          body: {
                password: "adsssss",
                username: "zok@tech.com"
          },
        }).then(response => {
          // Check if the response status is 200
          expect(response.status).to.equal(200);
          let lastname =response.body.lastname;
          cy.log("The last name is" + lastname);
        });
 
// cy.wait(20000)

})

})