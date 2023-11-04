import React from "react";

import "./BlogTitle.css";

const BlogTitle = ({blog}) => {
  return (
    <div className="heading-container">
      <div className="route">Home &gt; Blog &gt; {blog.title}</div>
      <div className="topic">
        <h1 className="blog-title">{blog.title}</h1>
        <h1 className="subtitle">{blog.subtitle}</h1>
      </div>
    </div>
  );
};

export default BlogTitle;
