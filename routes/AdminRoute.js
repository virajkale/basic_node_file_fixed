const express = require('express');
const {registerAdmin,getSingleUserById,updateSinglePersonById} = require('../controller/AdminCtrl');
const { verifyToken } = require('../utills/verifyToken');

const adminRoute=express.Router();

adminRoute.post('/registeradmin',registerAdmin);
// adminRoute.get("/getSingleUserById/:id",verifyToken, getSingleUserById);//tokennnnnnnnnnnnn
adminRoute.get("/getSingleUserById/:id", getSingleUserById);
adminRoute.patch("/updateSinglePersonById/:id", updateSinglePersonById);
module.exports=adminRoute;