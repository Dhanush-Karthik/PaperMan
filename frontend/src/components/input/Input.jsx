import React, { useState } from "react";
import "./Input.css";
import { BsFillPersonVcardFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { AiFillEye } from "react-icons/ai";
import {BsFillPersonFill} from "react-icons/bs";

const Input = ({ label, id, value, set }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="input-container">
      <div className="input-section">
        <p className="label">{label}</p>
        {id !== "password" ? (
          <input
            className="form-input"
            id={id}
            value={value}
            onInput={(e) => {
              console.log(label)
              if (e.target.id === "fn") {
                set.setFirstName(e.target.value);
              } else if (e.target.id === "ln") {
                set.setLastName(e.target.value);
              } else if(e.target.id === "email"){
                set.setEmail(e.target.value);
              }else{
                set.setId(e.target.value);
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
        {(id === "fn" || id === "ln") && (
          <BsFillPersonVcardFill size={"20px"} />
        )}
        {id === "email" && <MdEmail size={"22px"} />}
        {id === "id" && <BsFillPersonFill size={"22px"}/>}
        {id === "password" && (
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
