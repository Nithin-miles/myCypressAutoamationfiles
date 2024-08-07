/// <reference types="cypress"/>

/// <reference types="cypress"/>

describe('E-commerce Website Test', () => {

    let emailaddress 
    // let fileName='C:\cypressInstallation\cypress\fixtures\jsfile.pdf'
                                                                                
    it('test website', () => {
      cy.visit('https://qa-practice.netlify.app/auth_ecommerce.html');
     
      // cy.loginpage('admin@admin.com','admin123')
  
    
      // cy.get('#prooood > section:nth-child(2) > div > div:nth-child(1) > div > button').click();
      // cy.get(':nth-child(4) > .shop-item-details > .btn').click(); 
      // cy.get('#prooood > section:nth-child(1) > button').click();
      // cy.get('#phone').type('9098765433');
      // cy.get('#shippingForm > div:nth-child(2) > input').type('some unknown place on earth');
      // cy.get('#shippingForm > div:nth-child(3) > input').type('indore');
      // cy.get('#countries_dropdown_menu').select('Turkey');
      
      // cy.get('#submitOrderBtn').click()

      cy.get('#file-upload-item').click()

      cy.get('#file_upload').selectFile('cypress/fixtures/jsfile.pdf',);
     
      cy.get('.custom-file > .btn')  . click()

      cy.get('#file_upload_response').should('be.visible','You have successfully uploaded ""')
      
      // cy.wait(20000)

      // cy.screenshot('#content');
    });
});


// let warning

// it.only('the other parts of the website',()=>{

// cy.visit('https://qa-practice.netlify.app/')
// cy.get('#forms').click();

// cy.get('#recover-password').click();

// cy.get('#email').type('admin.admniney.com')

// cy.get('#recover-pw-form > #recover-password').click();

// cy.get('#message').invoke('text').then((text)=>{
// warning=text
// }

// )
// cy.get('#message').should('contain.text','An email with the new password has been sent to admin.admniney.com. Please verify your inbox')
// });

  
  

