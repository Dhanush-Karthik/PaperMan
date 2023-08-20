import React, { useState } from "react";
import { CgClose } from "react-icons/cg";
import BlogTitle from "./BlogTitle";
import AddCodeEditor from "./AddCodeEditorContainer";
import DescArea from "./DescArea";
import Footer from "./Footer";
import AddSubtitle from "./AddSubtitle";
import AddBlogHeader from "./AddBlogHeader";
import DescriptionWithCode from "./DescriptionWithCode";
import axios from "axios";
import BlogSubmit from "./BlogSubmit";

const AddBlogContainer = ({ setAddBlog, addBlog }) => {
  const [language, setLanguage] = useState("javascript");
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [blogObject, setBlogObject] = useState({
    title: "",
    subtitle: "",
    codeBlock: {
      language: language,
      code: code,
    },
    description: "",
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

  const handleLanguage = (lang, code) => {
    const codeBlockCopy = blogObject.codeBlock;
    setBlogObject((prev) => {
      return { ...prev, codeBlock: { ...codeBlockCopy, language: lang.value } };
    });
    setLanguage(lang.value);
  };
  const handleCode = (codeString) => {
    const codeBlockCopy = blogObject.codeBlock;
    setBlogObject((prev) => {
      return { ...prev, codeBlock: { ...codeBlockCopy, code: codeString } };
    });
    setCode(codeString);
  };

  const handleDescription = (desc) => {
    setBlogObject((prev) => {
      return { ...prev, description: desc };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
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
  console.log(blogObject);
  return (
    <div
      className={`bg-black h-[100vh] w-[100vw] flex flex-col  gap-4  text-white  fixed scrollbar-hide   overflow-auto  top-0 right-0 transition-all duration-200 ease-out   ${
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
      <AddCodeEditor
        handleCode={handleCode}
        code={code}
        setCode={setCode}
        handleLanguage={handleLanguage}
        language={language}
      />
      <DescriptionWithCode handleDescription={handleDescription} />
      <BlogSubmit handleSubmit={handleSubmit} loading={loading} />
      <Footer />
    </div>
  );
};

export default AddBlogContainer;
