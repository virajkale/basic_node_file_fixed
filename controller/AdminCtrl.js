const asyncHandler = require("express-async-handler");
const AdminModel=require('../model/Admin');
const { appErr, AppErr } = require("../utills/appErr.js");
const { generateToken } = require('../utills/generateToken.js');



//     const tokenuser = {
//       id: user?.admin_id,  // Replace with actual user ID
//       role: 'Admin', // Replace with actual role
//   };

//   // Generate token using the utility function
//   const token = generateToken(tokenuser);



exports.registerAdmin=asyncHandler(async(req,res,next)=>{

try {
    const { name, email } = req.body;
    if (!name || !email) {
        return res.status(400).json({
          status: "error",
          message: "Name and email are required.",
        });
      }

    const createAdmin= await AdminModel.create({name, email});
    res.status(200).json({
        status: "success",
        message: "Admin Created Successfully",
        data: createAdmin,
      });
} catch (error) {
    res.status(400).json({
        status: "error",
        message: error.message,
        
      });
}

});

exports.updateSinglePersonById = asyncHandler(async (req, res, next) => {
  try {
    const { name } = req.body;

    const getdata = await AdminModel.findOneAndUpdate(
      { _id: req.params.id },
      { name },
      { new: true }
    );
    res.status(200).json({
      status: "success",
      message: " Data Found",
      length: getdata.length,
      data: getdata,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: error.message,
    });
    // next(appErr(error.message));
  }
});

exports.getSingleUserById = asyncHandler(async (req, res, next) => {
  try {
    const getdata = await AdminModel.findById(req.params.id);
    res.status(200).json({
      status: "success",
      message: " Data Found",
      length: getdata.length,
      data: getdata,
    });
  } catch (error) {
    next(appErr(error.message));
  }
});