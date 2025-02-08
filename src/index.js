import express from "express";
import { config } from "dotenv";
import mongoose from "mongoose";
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

//middleware to prevent server form crashing if the body had Invalid format
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
    return res.status(400).json({ error: "Invalid JSON format" });
  }
  next();
});


app.use('/auth', authRouter)
app.use('/products', productsRouter)
