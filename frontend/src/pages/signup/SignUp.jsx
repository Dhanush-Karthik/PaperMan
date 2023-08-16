import React, { useState } from "react";
import {Link} from "react-router-dom"; 
import "./SignUp.css";
import Input from "../../components/input/Input";

const SignUp = () => {
  const [firstName,setFirstName] = useState("");
  const [lastName,setLastName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [cpassword,setCpassword] = useState("");

  const handleSubmit = (e) =>{
    e.preventDefault();
    const formValues = {
      firstName : firstName,
      lastName : lastName,
      email : email,
      password : password
    }
    console.log(formValues);
  };

  return (
    <div className="signup-container">
      {/* <Navbar /> */}
      <h3 className="sub-heading1">START FOR FREE</h3>
      <h1 className="main-heading">Create new <span>account.</span></h1>
      <p className="sub-heading2">
        Already a Member? <span><Link to="../login">Log In</Link></span>
      </p>
      <form className="signup-form">
        <div className="name-container">
          <Input label="First Name" id="fn" value={firstName} set={{setFirstName,setLastName,setEmail,setPassword,setCpassword}}/>
          <Input label="Last Name" id="ln" value={lastName} set={{setFirstName,setLastName,setEmail,setPassword,setCpassword}}/>
        </div>
        <Input label="Email" id="email" value={email} set={{setFirstName,setLastName,setEmail,setPassword,setCpassword}}/>
        <Input label="Password" id="password" value={password} set={{setFirstName,setLastName,setEmail,setPassword,setCpassword}}/>
        <Input label="Confirm Password" id="password" value={cpassword} set={{setFirstName,setLastName,setEmail,setPassword,setCpassword}}/>
        <div className="form-button-container">
          <button className="form-button back" onClick={(e)=>e.preventDefault()}><Link to="../login">Sign in</Link></button>
          <button className="form-button create" onClick={handleSubmit}>Create account</button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
