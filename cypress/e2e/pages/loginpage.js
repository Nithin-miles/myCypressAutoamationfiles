export class loginpage{

    navigate(url){
        cy.visit(url)
    }


    loginusername(username){
        cy.get('#loginSection>#login>.form-group>#email').type(`${username}`)
    }

   loginpassword(Password){

    cy.get ('#loginSection>#login>.form-group>#password').type(`${Password}`)
   }


   clicksubmitbutton(){
    cy.get('#login>#submitLoginBtn').click()
   }

  clicksidemenu(){
    cy.get('#file-upload-item').click()
  }
 
  clickfileuploadbutton(){
    cy.get('#file_upload').click()
  }
    // cy.get('#file-upload')
  

clicksubmit(){
    cy.get('[type=submit]').click()
}

validatingthefileuploadmessage(){

    cy.get('#file_upload_response').should('be.visible','You have successfully uploaded ""')
}

}

