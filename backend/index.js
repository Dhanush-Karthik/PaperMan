import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import BlogRouter from "./controllers/BlogController.js";
import mongoose from "mongoose";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "*",
  })
);

app.use("/blog", BlogRouter);

app.listen(process.env.PORT, () => {
  mongoose
    .connect("mongodb+srv://paperman:paperman@paperman.jaxjg6h.mongodb.net")
    .then(() => {
      console.log("server is running on port " + process.env.PORT);
    })
    .catch((error) => {
      console.log(" error has occured while connecting to the database ");
    });
});
