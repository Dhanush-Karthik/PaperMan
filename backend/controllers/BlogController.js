import express from "express";
import blogModel from "../schema/Blog.js";
const BlogRouter = express.Router();

BlogRouter.post("/save", (req, res) => {
  console.log(req.body);
  const blog = new blogModel({
    title: req.body.title,
    subtitle: req.body.subtitle,
    desc: req.body.description,
    code: req.body.codeBlock,
  });
  blog.save();
  return res.json({
    message: "successfully uploaded",
    success: true,
    data: blog,
  });
});

export default BlogRouter;
