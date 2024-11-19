const mongoose=require('mongoose');
const AdminSchema=new mongoose.Schema({
    name: {
        type: String,
        default: "",
      },
      username: {
        type: String,
        default: "",
      },
      email: {
        type: String,
      },
      password: {
        type: String,
      },
  
},{ timestamps: true });

const Admin=mongoose.model('Admin',AdminSchema);
module.exports= Admin;