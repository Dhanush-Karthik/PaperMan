import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../../components/input/Input";
import axios from "axios";
import "./Login.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const regexConfig = {
    names: /^[A-Za-z]{3,}$/,
    password:
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    email: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
  };
  const handleEmailValidation = (value) => {
    return regexConfig.email.test(value);
  };
  const handlePasswordValidation = (value) => {
    return regexConfig.password.test(value);
  };

  const handleFormDataChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name == "email") {
      if (!handleEmailValidation(value)) {
        setEmailError("Please provide a valid email address");
      } else {
        setEmailError("");
      }
    }
    if (name == "password") {
      if (!handlePasswordValidation(value)) {
        setPasswordError("please provide  a strong password");
      } else {
        setPasswordError("");
      }
    }
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;

    if (email == "") {
      setEmailError("Email is required");
    }
    if (password == "") {
      setPasswordError("Password is required");
    }
    if (regexConfig.email.test(email) && regexConfig.password.test(password)) {
      try {
        const res = await axios.post(
          "http://localhost:4000/auth/login",
          formData,
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <div className="login-container font-thin">
      <h3 className="sub-heading1 ">DIVE IN</h3>
      <h1 className="login-main-heading font-thin">
        Login to your <span className="blue-text">account.</span>
      </h1>
      <p className="sub-heading2 pl-0 mt-4 flex gap-3 ">
        New Member
        <span className="blue-text">
          <Link className="anchor-blue" to="../signup">
            Sign up
          </Link>
        </span>
      </p>
      <form className="login-form">
        <Input
          label="Username/Email id"
          id="id"
          error={emailError}
          name="email"
          handleFormDataChange={handleFormDataChange}
        />
        <Input
          label="Password"
          id="password"
          error={passwordError}
          name="password"
          handleFormDataChange={handleFormDataChange}
        />
        <div className="form-button-container">
          <button className="form-button back" onClick={handleSubmit}>
            <Link to="../signup">Sign up</Link>
          </button>
          <button className="form-button create ">Create account</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
