const jwt= require("jsonwebtoken");
exports.verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(403).json({ message: 'No token provided' });
    }

    // Extract token if it has the 'Bearer' prefix
    jwt.verify(token.split(' ')[1], process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Unauthorized: Invalid or expired token' });
        }

        req.userId = decoded.id;
        req.userRole = decoded.role;
        next();
    });
};

// const verifyToken=token=>{
//   const token = req.headers['authorization'];

//   if (!token) {
//       return res.status(403).json({ message: 'No token provided' });
//   }

//   // Extract token if it has the 'Bearer' prefix
//   jwt.verify(token.split(' ')[1], process.env.JWT_SECRET, (err, decoded) => {
//       if (err) {
//           return res.status(401).json({ message: 'Unauthorized: Invalid or expired token' });
//       }

//       req.userId = decoded.id;
//       req.userRole = decoded.role;
//       next();
//   });
//     // return jwt.verify(token,"anykey",(err,decode)=>{
//     //     if (err) {
//     //         return false;
//     //       } else {
//     //         return decode;
//     //       }
//     // })
// }

// module.exports = verifyToken;