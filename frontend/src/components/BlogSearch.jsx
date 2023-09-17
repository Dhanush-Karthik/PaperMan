import React from "react";
import { GoSearch } from "react-icons/go";
const BlogSearch = () => {
  return (
    <div className="flex mt-[50px] w-full flex-col justify-center items-center font-thin">
      <div className="w-[60%] justify-center items-center  bg-zinc-900 text-2xl text-black  flex gap-1 min-w-[380px]   p-4">
        <input
          placeholder="Search Blogs"
          className="outline-none bg-inherit text-inherit  text-zinc-300 w-[96%] pl-2  "
        />
        <GoSearch className=" w-[4%] min-w-[25px] text-zinc-300  " size={30} />
      </div>
    </div>
  );
};

export default BlogSearch;
