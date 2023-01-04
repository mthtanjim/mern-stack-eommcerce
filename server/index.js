const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv")
const authRoutes = require('./routes/auth')
const category = require('./routes/category')
const products = require('./routes/products')
const morgan = require("morgan")
const cors = require("cors")

//import express from 'express'
const app = express();
app.use(cors())
dotenv.config()
// const users = require('./routes/users');
// const { default: router } = require("./routes/auth.js");
//db

mongoose
  .connect(process.env.DBURL)
  .then(() => console.log("Databse Connected"))
  .catch((err) => console.log("DB Error =", ));

//middleware
app.use(morgan("dev"))
app.use(express.json()) 

//router middleware
app.use("/", authRoutes)
app.use("/category", category)
app.use("/products", products)

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`server listating at: ${port}`);
});
