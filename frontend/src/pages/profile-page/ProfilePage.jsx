import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import "./ProfilePage.css";
import ProfileOption from "../../components/profile-option/ProfileOption";
import Card from "../../components/card/Card";

import profile from "../../img/profile.png";
import Stat from "../../components/stat/Stat";

import { AiFillEdit } from "react-icons/ai";
import BlogCard from "../../components/blogcard/BlogCard";


const ProfilePage = () => {
  const [isEdit, setIsEdit] = useState(false);

  const [name, setName] = useState("Dhanush Karthik");
  const [email, setEmail] = useState("dhanushkarthik8@gmail.com");
  const [status, setStatus] = useState("Teach me to think!!");
  

  const listOfCards = [
    {
      caption: "End of React.js?",
      thumbnail: "https://react.dev/images/home/conf2021/cover.svg",
      user: "PaperMan",
      views: "60k",
      timestamp: "4 minutes ago",
      contentId: 1,
      hastags: [],
    },
    {
      caption: "Learn WebML in easy Way",
      thumbnail:
        "https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/1284006/retina_1708x683_cover-0323-MachineLearning_Dan_Newsletter-b21703f41d807514083e297955e1b46d.png",
      user: "PaperMan",
      views: "60k",
      timestamp: "4 minutes ago",
      contentId: 2,
      hastags: [],
    },
    {
      caption: "Javascript is god.",
      thumbnail:
        "https://cdn.geekboots.com/geek/javascript-meta-1652702081069.jpg",
      user: "PaperMan",
      views: "60k",
      timestamp: "4 minutes ago",
      contentId: 2,
      hastags: [],
    },
    {
      caption: "Learn sockets using Node.js",
      thumbnail:
        "https://www.peerbits.com/static/3908ce2a3941a9a56f1b145496600fac/189bc/development-practices-for-node-js-developers-main.jpg",
      user: "PaperMan",
      views: "60k",
      timestamp: "4 minutes ago",
      contentId: 3,
      hastags: [],
    },
    {
      caption: "Springboot",
      thumbnail:
        "https://miro.medium.com/v2/resize:fit:900/0*t61rpXrvkpesX_8U.jpg",
      user: "PaperMan",
      views: "60k",
      timestamp: "4 minutes ago",
      contentId: 4,
      hastags: [],
    },
    {
      caption: "Web development",
      thumbnail:
        "https://www.digitalsilk.com/wp-content/uploads/2022/09/website-development-process-1.jpg",
      user: "PaperMan",
      views: "60k",
      timestamp: "4 minutes ago",
      contentId: 5,
      hastags: [],
    },
  ];

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
              {listOfCards.map((item)=>{
                return <BlogCard cardData={item}/>
              })}
            </div>
          </>
          <>
            <div className="profile-options">
              <ProfileOption title="Blog posted" />
            </div>
            <div className="profile-card-container">
            {listOfCards.map((item)=>{
                return <BlogCard cardData={item}/>
              })}
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
