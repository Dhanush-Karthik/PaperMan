import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import { BsFillPersonVcardFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { AiFillEye } from "react-icons/ai";
import {Link} from "react-router-dom";
import "./SignUp.css";
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
          <div className="input-container">
            <div className="input-section">
              <p className="label">First Name</p>
              <input className="form-input" value={firstName} onInput={(e) => {setFirstName(e.target.value)}}/>
            </div>
            <div className="form-icon">
              <BsFillPersonVcardFill size={"20px"} />
            </div>
          </div>
          <div className="input-container">
            <div className="input-section">
              <p className="label">Last Name</p>
              <input className="form-input" value={lastName} onInput={(e) => {setLastName(e.target.value)}}/>
            </div>
            <div className="form-icon">
              <BsFillPersonVcardFill size={"20px"} />
            </div>
          </div>
        </div>
        <div className="input-container">
          <div className="input-section">
            <p className="label">Email</p>
            <input className="form-input" value={email} onInput={(e) => {setEmail(e.target.value)}}/>
          </div>
          <div className="form-icon">
            <MdEmail size={"22px"} />
          </div>
        </div>
        <div className="input-container">
          <div className="input-section">
            <p className="label">Password</p>
            <input type="password" className="form-input" value={password} onInput={(e) => {setPassword(e.target.value)}}/>
          </div>
          <div className="form-icon">
            <AiFillEye size={"22px"} />
          </div>
        </div>
        <div className="form-button-container">
          <button className="form-button back"><Link to="/">Go back</Link></button>
          <button className="form-button create" onClick={handleSubmit}>Create account</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
