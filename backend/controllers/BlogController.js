import express from "express";
import blogModel from "../schema/Blog.js";

const BlogRouter = express.Router();

BlogRouter.post("/save", (req, res) => {
  const roles = req.auth.Roles;
  console.log(roles);
  if (!roles.includes("user")) {
    return res
      .status(401)
      .json({ success: false, error: "you don't have privileges" });
  }

  return res.json({ message: "message received successfully" });
});

export default BlogRouter;
