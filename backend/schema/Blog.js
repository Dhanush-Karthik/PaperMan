import mongoose from "mongoose";

const contentSchema = new mongoose.Schema({
  kind: {
    type: String,
    required: true,
  },
  lang: {
    type: String,
  },
  data: {
    type: String,
    required: true,
  },
});

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
  },
  hastags: [
    {
      type: String,
    },
  ],
  content: [contentSchema],
});

const blogModel = mongoose.model("blogs", blogSchema);

export default blogModel;
