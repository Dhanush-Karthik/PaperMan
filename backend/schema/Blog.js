import mongoose from "mongoose";

const blogSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  codeBlock: {
    language: String,
    code: String,
  },
  desc: {
    type: String,
    required: true,
  },
});

const blogModel = mongoose.model("blogs", blogSchema);

export default blogModel;
