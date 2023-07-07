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
      <h1 className="main-heading">Create new account<span>.</span></h1>
      <p className="sub-heading2">
        Already a Member? <span><Link to="../login">Log In</Link></span>
      </p>
      <form className="signup-form">
        <div className="name-container">
          <Input label="First Name" value={firstName} set={{setFirstName,setLastName,setEmail,setPassword,setCpassword}}/>
          <Input label="Last Name" value={lastName} set={{setFirstName,setLastName,setEmail,setPassword,setCpassword}}/>
        </div>
        <Input label="Email" value={email} set={{setFirstName,setLastName,setEmail,setPassword,setCpassword}}/>
        <Input label="Password" value={password} set={{setFirstName,setLastName,setEmail,setPassword,setCpassword}}/>
        <Input label="Confirm Password" value={cpassword} set={{setFirstName,setLastName,setEmail,setPassword,setCpassword}}/>
        <div className="form-button-container">
          <button className="form-button back"><Link to="/">Go back</Link></button>
          <button className="form-button create" onClick={handleSubmit}>Create account</button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
