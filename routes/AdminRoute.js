const express = require('express');
const {registerAdmin,getSingleUserById,updateSinglePersonById} = require('../controller/AdminCtrl');
const adminRoute=express.Router();

adminRoute.post('/registeradmin',registerAdmin);
adminRoute.get("/getSingleUserById/:id", getSingleUserById);
adminRoute.patch("/updateSinglePersonById/:id", updateSinglePersonById);
module.exports=adminRoute;