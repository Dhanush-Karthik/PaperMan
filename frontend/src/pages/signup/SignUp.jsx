import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import {Link} from "react-router-dom";
import "./SignUp.css";
import Input from "../../components/input/Input";
const Login = () => {
  const [firstName,setFirstName] = useState("");
  const [lastName,setLastName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

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
    <div className="login-container">
      <Navbar />
      <h3 className="sub-heading1">START FOR FREE</h3>
      <h1 className="main-heading">Create new account<span>.</span></h1>
      <p className="sub-heading2">
        Already a Member? <span><Link to="../login">Log In</Link></span>
      </p>
      <form className="login-form">
        <div className="name-container">
          <Input label="First Name" value={firstName} set={{setFirstName,setLastName,setEmail,setPassword}}/>
          <Input label="Last Name" value={lastName} set={{setFirstName,setLastName,setEmail,setPassword}}/>
        </div>
        <Input label="Email" value={email} set={{setFirstName,setLastName,setEmail,setPassword}}/>
        <Input label="Password" value={password} set={{setFirstName,setLastName,setEmail,setPassword}}/>
        <div className="form-button-container">
          <button className="form-button back"><Link to="/">Go back</Link></button>
          <button className="form-button create" onClick={handleSubmit}>Create account</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
