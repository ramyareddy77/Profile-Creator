import React  from 'react';
import  '../login/login.css';
 
  

function login() {
    return(
        <div className='container'> 
         
         <div className='box'> 
          
       
       <h2>Login Here</h2>
       <form >
         <label className="solid" >
           Username 
           <input type ="text" name ="username" />
         </label>
         <br/>
         <label className=" liquid">
           Password 
           <input type ="password" name ="password" />
         </label>
         <br/>
         <input type="submit" value="Login" className="login-button" disabled={false} />
         <br/>
         <p  className='link'>
         
          <a href='#forget password?'>forget password?</a> or <a href='#sign up'>sign up</a>
          
         </p>
          </form>
      
     </div>
     </div>
       
       
       
      
       
    ) ;      
}
export default login ;  