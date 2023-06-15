import React from 'react'
import { useNavigate ,NavLink,Link} from "react-router-dom";
import "./Login.css"
import { useState } from 'react';
const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedin, setIsLoggedin] = useState(false);
  const navigate = useNavigate();



  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
       console.log("Login Successfull!!");
        setIsLoggedin(true);
        navigate("/");
      } 
    catch (error) {
      console.log(error);
 console.log("Something went wrong");
    }
  };
  const logout=()=>{
    setIsLoggedin(false);
  }

  return (
    <>   

{/* 
<!-- Modal --> */}
<div class="modal fade" id="LoginModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalCenterTitle">Login/ <Link  to='/Signup '  data-toggle="modal" data-target="#LoginModal">
         Signup
        </Link></h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">

        
      <form  action='http://localhost:4000/login' method='post'>
				
 
     <div class="input-group mb-3 " >
      <div class="input-group-prepend" >
    <button class="input-group-text d-flex justify-content-between " id="basic-addon1" style={{width:"25rem"}}>
      
      <img  src=' https://files.codingninjas.in/icon-google-24742.png' alt='google'/>  
      <span class="text-center ">Login with google</span>
      </button>
   
     </div>
     <div class="input-group-prepend" >
    <button class="input-group-text d-flex justify-content-between " id="basic-addon1"style={{width:"25rem"}}> 
      
      <img  src=' https://files.codingninjas.in/icon-google-24742.png' alt='google'/>  
      <span class="text-center ">Login with google</span>
      </button>
   
     </div>
     <div class="input-group-prepend" >
    <button class="input-group-text d-flex justify-content-between " id="basic-addon1" style={{width:"25rem"}}>
      
      <img  src=' https://files.codingninjas.in/icon-google-24742.png' alt='google'/>  
      <span class="text-center ">Login with google</span>
      </button>
   
     </div> 
    
    <span class="text-center d-flex justify-content-center">Use Your email here...</span>
     
      <form action='http://localhost:4000/login ' method='post' >
      <div>
        <input class="border border-top-0 border-right-0 border-left-0" style={{width:"25rem"}} type="email" name="email" placeholder="Email is required *" required=""/>
        </div>
        <div>
        <input class="border border-top-0 border-right-0 border-left-0" style={{width:"25rem"}} type="password" name="password" placeholder="password is required *" required=""/>
        </div>
      </form>

     </div>
  



				<div>
       
        </div>
				<div>
     
        </div>
        <div>
      
        </div>
		<button class="btn btn-primary">Submit</button>
                  
                    </form>
      </div>
     
    </div>
  </div>
</div>
    </>
  )
}

export default Login