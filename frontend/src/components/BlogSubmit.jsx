import React from "react";

const BlogSubmit = ({ handleSubmit }) => {
  return (
    <div
      className="w-full bg-teal-600 p-4 rounded-md cursor-pointer text-black"
      onClick={handleSubmit}
    >
      Post
    </div>
  );
};

export default BlogSubmit;
