import express from "express";
import { config } from "dotenv";
import mongoose from "mongoose";

config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("connected to the Database");
  })
  .catch((err) => {
    console.log(`Error Connecting to the Database: ${err.message}`);
  });

const app = express();

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is Listening on Port: ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Hello world ");
});
