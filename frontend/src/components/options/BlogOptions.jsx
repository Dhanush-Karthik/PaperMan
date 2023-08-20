import { React, useState } from "react";


import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";

const BlogOptions = ({setOpenComment}) => {
  const [isLike, setIsLike] = useState(false);
  const handleComment = () => {
    setOpenComment(false);
  };

  const handleLike = () => {
    setIsLike(!isLike);
  };
  return (
    <div id="options" className="options">
      <div className="icons" onClick={handleLike}>
        {isLike ? (
          <AiFillLike size={"20px"} color="rgb(13 148 136)" />
        ) : (
          <AiOutlineLike size={"20px"} color="rgb(13 148 136)" />
        )}
      </div>
      <div className="icons" onClick={handleComment}>
        <BiCommentDetail size={"20px"} color="rgb(13 148 136)" />
      </div>
    </div>
  );
};

export default BlogOptions;
