const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "./config/custom.env" });

const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");
var multer = require("multer");


const dbconnect = require("./config/dbConnect");
const AdminRoute=require('./routes/AdminRoute.js');
const {
  globalErrHandler,
  notFoundErr,
} = require("./middlewares/globalErrHandler");
const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(cors({ origin: "*" }));
app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE,PATCH");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.setHeader("Access-Control-Allow-Credentials", true);
    next();
  });
  //************************************************
//************** R O U T E S **********************
//************************************************
  app.use("/api/v1/admin/", AdminRoute);


//Error middlewares
app.use(notFoundErr);
app.use(globalErrHandler);

app.listen(PORT, console.log(`server is running on port ${PORT}`));
