const mongoose = require('mongoose');
const dbConnect = async () =>  {
try {
  await mongoose.connect(process.env.MONGODB_URI) ;
  console.log("DB connected Sucessfully") ;
} catch (error) {
    console.log("DB connection fail") ;
}
}

dbConnect();