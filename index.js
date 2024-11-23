const express = require("express");
const mongoose = require("mongoose");
const app = express();
const router = require("./routers/UserRouter");
const dotenv = require("dotenv");
dotenv.config();
app.use(express.json());
app.use(router);

const connectDataB = async () => {
  try {
    const res = await mongoose.connect(process.env.MONGODB_URI);
    console.log("db connected");
  } catch (error) {
    console.log(error);
  }
};
connectDataB();

app.listen(8090, console.log("connected to 8090"));
