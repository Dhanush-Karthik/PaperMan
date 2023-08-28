import React from "react";

const BlogTitle = ({ handleTitle }) => {
  return (
    <div className="w-[100%]    p-4  flx text-xl  ">
      <input
        type="text"
        className="outline-none  text-teal-600 p-5 w-[93%] bg-black border-teal-600 border-2  "
        placeholder="Enter your title"
        onChange={handleTitle}
      />
    </div>
  );
};

export default BlogTitle;
