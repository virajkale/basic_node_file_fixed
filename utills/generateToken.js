const jwt=require("jsonwebtoken");
const generateToken=(user)=>{
    // return jwt.sign({id},"anykey",{expiresIn:"5d"});
    return jwt.sign(
        { id: user.id, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: '10h' } // Token expires in 1 hour
    );
}

//     const tokenuser = {
//       id: user?.admin_id,  // Replace with actual user ID
//       role: 'Admin', // Replace with actual role
//   };

//   // Generate token using the utility function
//   const token = generateToken(tokenuser);
//   // ===================   Token end   ==============================

module.exports=generateToken;