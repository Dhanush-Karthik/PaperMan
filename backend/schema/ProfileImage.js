import mongoose from "mongoose";
const image = mongoose.Schema({
  name: String,
  path: String,
  contentType: String,
});

const imageModel = mongoose.model("images", image);

export default imageModel;
