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
  subtTopicArray: {
    type: Array,
  },
});

const blogModel = mongoose.model("blogs", blogSchema);

export default blogModel;
