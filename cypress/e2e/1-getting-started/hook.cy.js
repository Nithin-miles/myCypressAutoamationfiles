
describe('hooks',()=>{

   beforeEach(()=>{
    cy.log("******API CALLS******")

   })

afterEach(()=>{

cy.log("**api call is done**")

})

    it('Get CALL',()=>{

        cy.request({
          
          method:'GET',
          url: 'https://dummy.restapiexample.com/api/v1/employees',
        
        }).then(response=>{
        
            expect(response.status).to.equal(200)
            let l =response.body.data[0].employee_name;
                  cy.log("The last name is" + l)
        
        })

})


it('Delet call',()=>{

    cy.request({
    
        method:'DELETE',
        url:'https://fakerestapi.azurewebsites.net/api/v1/Activities/4',
       
    }).then(response =>{
    
    expect(response.status).to.equal(200)
       
        cy.log(response.status)
    
    
    })
    
})

})