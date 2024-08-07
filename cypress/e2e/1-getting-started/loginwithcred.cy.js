import{loginpage} from "../pages/loginpage"
const login = new loginpage()

it('lg',function(){

 login.navigate('https://qa-practice.netlify.app/auth_ecommerce');
 login.loginusername('admin@admin.com');
 login.loginpassword('admin123');
 login.clicksubmitbutton();

 login.clicksidemenu();
 login.clickfileuploadbutton();
 login.clicksubmitbutton();



 

})



    

