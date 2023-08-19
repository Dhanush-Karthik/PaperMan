import React from "react";

const BlogTitle = ({ handleTitle }) => {
  return (
    <div className="w-[100%]    p-4  flx text-2xl ">
      <input
        type="text"
        className="outline-none rounded-3xl text-teal-600 p-4 w-[93%] bg-gray-800"
        placeholder="Enter your title"
        onChange={handleTitle}
      />
    </div>
  );
};

export default BlogTitle;
