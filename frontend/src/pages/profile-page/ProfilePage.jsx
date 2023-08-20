import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import "./ProfilePage.css";
import ProfileOption from "../../components/profile-option/ProfileOption";
import Card from "../../components/card/Card";

import profile from "../../img/profile.png";
import Stat from "../../components/stat/Stat";

import { AiFillEdit } from "react-icons/ai";

const ProfilePage = () => {
  const [isEdit, setIsEdit] = useState(false);

  const [name, setName] = useState("Dhanush Karthik");
  const [email, setEmail] = useState("dhanushkarthik8@gmail.com");
  const [status, setStatus] = useState("Teach me to think!!");

  return (
    <div className="profile-container">
      <Navbar />
      <div className="profile-content">
        <div className="profile-left">
          <>
            <div className="profile-options">
              <ProfileOption title="Blogs Visited" />
            </div>
            <div className="profile-card-container">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </>
          <>
            <div className="profile-options">
              <ProfileOption title="Blog posted" />
            </div>
            <div className="profile-card-container">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </>
        </div>
        <div className="profile-right">
          <div className="profile-detail">
            <div className="profile-greet">
              <span className="greet">Hello,</span> <br />
              Dhanush Karthik
            </div>
            <img src={profile} className="profile-img" />
          </div>
          <div className="user-details">
            <div className="user-details-title">
              <div className="user-detail-title">Details</div>
              <div onClick={() => setIsEdit(!isEdit)}>
                <AiFillEdit size={20} />
              </div>
            </div>
            <div className="user-detail-name">Name: </div>
            <div className="user-detail">
              {isEdit ? (
                <input
                  placeholder="Name"
                  value={name}
                  onInput={(e) => setName(e.target.value)}
                  className="user-detail-input"
                />
              ) : (
                <div className="user-detail-input input-display">{name}</div>
              )}
            </div>
            <div className="user-detail-name">Email id:</div>
            <div className="user-detail">
              {isEdit ? (
                <input
                  placeholder="Email id"
                  value={email}
                  onInput={(e) => setEmail(e.target.value)}
                  className="user-detail-input"
                />
              ) : (
                <div className="user-detail-input input-display">{email}</div>
              )}
            </div>
            <div className="user-detail-name">Status: </div>
            <div className="user-detail">
              {isEdit ? (
                <input
                  placeholder="Status"
                  value={status}
                  onInput={(e) => setStatus(e.target.value)}
                  className="user-detail-input"
                />
              ) : (
                <div className="user-detail-input input-display">{status}</div>
              )}
            </div>
          </div>
          <div className="stats">
            <Stat title="Blogs Read" color={"#5C38FF"} count={264} />
            <Stat title="Blogs Liked" color={"#63C4ED"} count={1024} />
            <Stat title="Blogs Posted" color={"#FFD059"} count={34} />
            <Stat title="Blogs " color={"#FF5858"} count={98} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
