import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Cors from "cors";
// const express = require('express')
// const dotenv= require("dotenv")

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
const app = express();

app.use(Cors());
app.use(express.json());

dotenv.config();

// const port = 3000
const PORT=process.env.PORT || 4000   // if server will busy at 4001 then run at 4000
const URI=process.env.MongoDBURI
// connect to mongoDB
try{
   mongoose.connect(URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
   });
   console.log("Connected to MongoDB.!");
}catch(error){
    console.log("Error:",error);
}
// defing routes
app.use("/book",bookRoute);
app.use("/users",userRoute);

app.listen(PORT, () => {
  console.log(`Our server is listening on port ${PORT}`)
})