import express from "express";
import blogModel from "../schema/Blog.js";
const BlogRouter = express.Router();

BlogRouter.post("/save", (req, res) => {
  console.log(req.body);
  return res.json({ message: "message received successfully" });
});

export default BlogRouter;
