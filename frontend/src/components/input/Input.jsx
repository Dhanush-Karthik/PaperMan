import React, { useState } from "react";
import "./Input.css";
import { BsFillPersonVcardFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { AiFillEye } from "react-icons/ai";

const Input = ({ label, value, set }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="input-container">
      <div className="input-section">
        <p className="label">{label}</p>
        {(label !== "Password" && label!== "Confirm Password") ? (
          <input
            className="form-input"
            id={label}
            value={value}
            onInput={(e) => {
              console.log(label)
              if (e.target.id === "First Name") {
                set.setFirstName(e.target.value);
              } else if (e.target.id === "Last Name") {
                set.setLastName(e.target.value);
              } else {
                set.setEmail(e.target.value);
              }
            }}
          />
        ) : (
          <input
            className="form-input"
            id={label}
            value={value}
            type={showPassword ? "text" : "password"}
            onInput={(e) => {
              console.log(e.target.id);
              (e.target.id === "Password") ? set.setPassword(e.target.value): set.setCpassword(e.target.value);
            }}
          />
        )}
      </div>
      <div className="form-icon">
        {(label === "First Name" || label === "Last Name") && (
          <BsFillPersonVcardFill size={"20px"} />
        )}
        {label === "Email" && <MdEmail size={"22px"} />}
        {(label === "Password" || label === "Confirm Password" )&& (
          <AiFillEye
            size={"22px"}
            onClick={() => {
              setShowPassword(!showPassword);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Input;
