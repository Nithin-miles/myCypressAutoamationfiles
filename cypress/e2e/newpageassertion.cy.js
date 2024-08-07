describe('asserting the vales',()=>{


    it('asserting the deliver message',() =>{
   
        cy.visit('https://qa-practice.netlify.app/auth_ecommerce')

        cy.get ('#login>.form-group>#email').type(' admin@admin.com')

        cy.get ('#login>.form-group>#password') .type('admin123')  

        cy.get('#prooood>section:nth-child(2)>div>div:nth-child(1) button') .click()

        cy.get('#prooood>section:nth-child(2)>div>div:nth-child(2) button').click()
       
        cy.get('#prooood>section:nth-child(1) > button').click()

        cy.get('#shipping-address div>#phone').type('deadpool')

        cy.get ('#shippingForm>div:nth-child(2)>input').then($input => {
            const value = $input.val();
            
            if (value === '') {
              
              cy.log('The input field is empty.');
              
            } else {
             
              cy.log('The input field contains text.');
              
            }
        cy.get ('#shippingForm>div:nth-child(3) input') .type('Newyork')

        cy.get ('#shippingForm>div:nth-child(4)>#countries_dropdown_menu>option:nth-child(14)')

        cy.get ('#shippingForm>#submitOrderBtn').click()
  
    })
})

})
