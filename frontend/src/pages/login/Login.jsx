import React from "react";
import Navbar from "../../components/Navbar";
import { BsFillPersonVcardFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { AiFillEye } from "react-icons/ai";
import "./Login.css";
const Login = () => {
  return (
    <div className="login-container">
      <Navbar />
      <h3 className="sub-heading1">START FOR FREE</h3>
      <h1 className="main-heading">Create new account<span>.</span></h1>
      <p className="sub-heading2">
        Already a Member? <span><a href="##">Log In</a></span>
      </p>
      <form className="login-form">
        <div className="name-container">
          <div className="input-container">
            <div className="input-section">
              <p className="label">First Name</p>
              <input className="form-input" />
            </div>
            <div className="form-icon">
              <BsFillPersonVcardFill size={"20px"} />
            </div>
          </div>
          <div className="input-container">
            <div className="input-section">
              <p className="label">Last Name</p>
              <input className="form-input" />
            </div>
            <div className="form-icon">
              <BsFillPersonVcardFill size={"20px"} />
            </div>
          </div>
        </div>
        <div className="input-container">
          <div className="input-section">
            <p className="label">Email</p>
            <input className="form-input" />
          </div>
          <div className="form-icon">
            <MdEmail size={"22px"} />
          </div>
        </div>
        <div className="input-container">
          <div className="input-section">
            <p className="label">Password</p>
            <input type="password" className="form-input" />
          </div>
          <div className="form-icon">
            <AiFillEye size={"22px"} />
          </div>
        </div>
        <div className="form-button-container">
          <button className="form-button back">Go back</button>
          <button className="form-button create">Create account</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
