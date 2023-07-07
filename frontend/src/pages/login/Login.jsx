import React, { useState } from "react";
import {Link} from "react-router-dom";
import Input from "../../components/input/Input";

import "./Login.css";

const Login = () => {

  const [id,setId] = useState("");
  const [password,setPassword] = useState("");

  const handleSubmit = (e) =>{
    e.preventDefault();
    const formValues = {
      id : id,
      password : password
    }
    console.log(formValues);
  };
  return (
    <div className='login-container'> 
      <h3 className="sub-heading1">DIVE IN</h3>
      <h1 className="main-heading">Login to your account<span>.</span></h1>
      <p className="sub-heading2">
        New Member? <span><Link to="../signup">Sign up</Link></span>
      </p>
      <form className="login-form">
        <Input label="Username/Email id" id ="id"  value={id} set={{setId,setPassword}}/>
        <Input label="Password" id="password" value={password} set={{setId,setPassword}}/>
        <div className="form-button-container">
          <button className="form-button back" onClick={(e)=>e.preventDefault()}><Link to="../signup">Sign up</Link></button>
          <button className="form-button create" onClick={handleSubmit}>Create account</button>
        </div>
      </form>
    </div>
  )
}

export default Login
