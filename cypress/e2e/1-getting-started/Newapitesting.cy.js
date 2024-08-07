
/// <reference types="cypress" />
describe('NewaApi',()=>{

it.only('Test the APIS',()=>{


    cy.fixture('API/loginbody.json').then((data)=>{  //here we passed the path of the json which is in the fixture folder and passed that into data 

        const postcallbody=data
 
    

    cy.api({
        method: 'POST',
        url: 'https://dummy.restapiexample.com/api/v1/create',
        // auth: {
        //   bearer: Cypress.env('token'),  
        // },

        body: postcallbody

      }) .then(response => {
        

        expect(response.status).to.equal(200);

        let lastname =response.body.data.name 

       expect(response.body.data.age).to.eq(postcallbody.age)
       expect(response.body.data).has.property('name', postcallbody.name);

        cy.log("The name     is " +  lastname);

        
      })


    })
})

it.skip('Get CALL',()=>{


cy.api({
  
  method:'GET',
  url: 'https://dummy.restapiexample.com/api/v1/employees',

}).then(response=>{

    expect(response.status).to.equal(200)
    let l =response.body.data[0].employee_name;
          cy.log("The last name is" + l)

})

})

it.skip('Delet call',()=>{

cy.request({

    method:'DELETE',
    url:'https://dummy.restapiexample.com/api/v1/delete/2',
   
}).then(response =>{

expect(response.status).to.equal(200)
   
    cy.log(response.status)


})

})


})









