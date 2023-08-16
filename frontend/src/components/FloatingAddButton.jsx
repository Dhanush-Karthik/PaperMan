import React from "react";
import { BsPlus } from "react-icons/bs";
const FloatingAddButton = ({ handleBlogSlide }) => {
  return (
    <div
      onClick={handleBlogSlide}
      className="rounded-full flex justify-center cursor-pointer hover:bg-teal-500 items-center bg-teal-600 p-3 shadow-2xl sticky bottom-[40px] left-[92%]  w-[70px] h-[70px] text-black top-[10%]  "
    >
      <BsPlus size={30} />
    </div>
  );
};

export default FloatingAddButton;
