import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Hastags from "../components/Hastags";
import HastagsContainer from "../components/HastagsContainer";
import HomeCardContainer from "../components/HomeCardContainer";
import RecentContent from "../components/RecentContent";

import FloatingAddButton from "../components/FloatingAddButton";
import AddBlogContainer from "../components/AddBlogContainer";
import BlogSearch from "../components/BlogSearch";
import NavbarNew from "../components/NavbarNew";
import axios from "axios";
import Slogan from "../components/Slogan";
import Info from "../components/Info";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const [addBlog, setAddBlog] = useState(false);
  const [drop, setDrop] = useState(true);
  const [info, setInfo] = useState(true);
  const [items, Setitems] = useState(0);
  const navigate = useNavigate();

  const handleBlogSlide = async () => {
    if (!addBlog) {
      try {
        const res = await axios.post(
          "http://localhost:4000/auth/validate",
          {
            access_token: "get it from the cookie",
          },
          {
            withCredentials: true,
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log(res.data);

        if (res.data.success) {
          setAddBlog(!addBlog);
        } else {
          navigate("/login");
          setAddBlog(addBlog);
        }
      } catch (error) {
        console.log(error);
      }
    }

    setAddBlog(!addBlog);
  };
  const handleDropDown = () => {
    setDrop(!drop);
  };
  const handleClose = () => {
    setInfo(false);
  };
  return (
    <div className=" bg-black m-0 h-max overflow-hidden relative font-customFont   ">
      {info && <Info handleClose={handleClose} />}
      <NavbarNew />
      <Slogan />
      <BlogSearch />
      <RecentContent />
      <FloatingAddButton handleBlogSlide={handleBlogSlide} />
      <AddBlogContainer addBlog={addBlog} setAddBlog={setAddBlog} />
    </div>
  );
};

export default Home;
