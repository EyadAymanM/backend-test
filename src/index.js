import express from "express";
import mongoose from "mongoose";
import { config } from "dotenv";
import authRouter from "./auth/auth.route.js";
import productsRouter from "./product/product.route.js";

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

app.use(express.json())

app.use('/auth', authRouter)
app.use('/products', productsRouter)
