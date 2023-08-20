import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Hastags from "../components/Hastags";
import HastagsContainer from "../components/HastagsContainer";
import HomeCardContainer from "../components/HomeCardContainer";
import SpecificContent from "../components/SpecificContent";
import Footer from "../components/Footer";
import FloatingAddButton from "../components/FloatingAddButton";
import AddBlogContainer from "../components/AddBlogContainer";

const Home = () => {
  const [addBlog, setAddBlog] = useState(false);
  const [drop, setDrop] = useState(true);
  const handleBlogSlide = () => {
    console.log("hehe");
    setAddBlog(!addBlog);
  };
  const handleDropDown = () => {
    setDrop(!drop);
  };
  return (
    <div className=" bg-black m-0 h-max overflow-hidden relative ">
      <Navbar handleDropDown={handleDropDown} drop={drop} />
      <HastagsContainer />
      <HomeCardContainer />
      <SpecificContent />
      <Footer />
      <FloatingAddButton handleBlogSlide={handleBlogSlide} />
      <AddBlogContainer addBlog={addBlog} setAddBlog={setAddBlog} />
    </div>
  );
};

export default Home;
