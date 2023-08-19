import React from "react";
import Loading from "./Loading";

const BlogSubmit = ({ handleSubmit, loading }) => {
  return (
    <div className="w-full flex justify-center items-center mt-8 ">
      <div
        className={`bg-teal-600 p-4   cursor-pointer  text-center ${
          loading ? "rounded-full w-auto" : "w-[90%] rounded-md"
        } `}
        onClick={handleSubmit}
      >
        {loading ? "Saving..." : "POST"}
      </div>
    </div>
  );
};

export default BlogSubmit;
