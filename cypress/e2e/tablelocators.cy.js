import{loginpage} from "../pages/loginpage"

describe('finding the locators',() => {

it('table',()=>{
    // let =useroftable
   
    cy.visit('https://qa-practice.netlify.app/dynamic-table')

    // cy.get('#data-table>#data-tbody tr:nth-child(4) td:nth-child(3)').should('have.text')

    cy.get('#ul-menu-items>li:nth-child(1)').click()

    // cy.get(`${useroftable}`).click

    cy.get('#loginSection>#login>.form-group>#email').type('admin@admin.com')

    cy.get('#email').should('be.visible','admin@admin.com')

    cy.get('#loginSection>#login>.form-group>#password').type('admin123')

    cy.get('#loginSection>#login>#submitLoginBtn').click()
   
    cy.get('#prooood>section:nth-child(1)> button').click()

    
})


const login = new loginpage()

it.only('lg',function(){

 login.navigate('https://qa-practice.netlify.app/auth_ecommerce');
 login.loginusername('admin@admin.com');
 login.loginpassword('admin123');
 login.clicksubmitbutton();
 

})



    











})