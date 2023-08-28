import React, { useState } from "react";
import { CgClose } from "react-icons/cg";
import BlogTitle from "./BlogTitle";
import Footer from "./Footer";
import AddSubtitle from "./AddSubtitle";
import AddBlogHeader from "./AddBlogHeader";
import axios from "axios";
import BlogSubmit from "./BlogSubmit";

import Content from "./Content";
import AddContentButton from "./AddContentButton";
import Thumbnail from "./Thumbnail";

const AddBlogContainer = ({ setAddBlog, addBlog }) => {
  const [subTopicIndex, setSubTopicIndex] = useState([0]);

  const [loading, setLoading] = useState(false);
  const [subTopicArray, setSubTopicArray] = useState([
    {
      content: [],
    },
  ]);
  const [blogObject, setBlogObject] = useState({
    title: "",
    subtitle: "",
    subTopicArray: subTopicArray,
  });

  const handleTitle = (e) => {
    setBlogObject((previous) => {
      return { ...previous, title: e.target.value };
    });
  };

  const handleSubtitle = (e) => {
    setBlogObject((previous) => {
      return { ...previous, [e.target.name]: e.target.value };
    });
  };

  const handleAddContent = () => {
    const newElement = subTopicIndex[subTopicIndex.length - 1] + 1;
    const tempSubTopicEntity = {
      content: [],
    };
    subTopicArray.push(tempSubTopicEntity);
    setSubTopicIndex((prev) => {
      return [...subTopicIndex, newElement];
    });
    setSubTopicArray(subTopicArray);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(blogObject);
    try {
      const res = await axios.post(
        "http://localhost:4000/blog/save",
        blogObject
      );
      console.log(res.data);
    } catch (error) {
      console.log("error on posting the blog");
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <div
      className={`bg-black h-[100vh] overflow-x-scroll flex justify-center items-center w-[100vw]  flex-col  gap-5  text-white  fixed scrollbar-hide   overflow-auto  top-0 right-0 transition-all duration-200 ease-out   ${
        addBlog ? " translate-y-0 " : "translate-y-full "
      } `}
    >
      <CgClose
        className="absolute top-[30px] right-[30px] "
        onClick={() => {
          setAddBlog(false);
        }}
      />
      <AddBlogHeader />
      <BlogTitle handleTitle={handleTitle} />
      <AddSubtitle handleSubtitle={handleSubtitle} />
      <Thumbnail />
      <Content
        subTopicIndex={subTopicIndex}
        blogObject={blogObject}
        subTopicArray={subTopicArray}
        setSubTopicIndex={setSubTopicIndex}
        setSubTopicArray={setSubTopicArray}
        setBlogObject={setBlogObject}
      />
      <AddContentButton handleAddContent={handleAddContent} />
      <BlogSubmit handleSubmit={handleSubmit} loading={loading} />
      <Footer />
    </div>
  );
};

export default AddBlogContainer;

// subTopics: [
//   {
//     subTopicTitle: "",
//     content: [
//       {
//         contentType: "codeBlock",
//         data: {
//           language: "",
//           code: "",
//         },
//       },
//       {
//         contentType: "description",
//         data: {
//           description: "",
//         },
//       },
//     ],
//   },
// ]
