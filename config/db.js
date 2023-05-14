const mongoose=require('mongoose')
const connectDB= async()=>{
    try {
      //  await mongoose.connect(`${process.env.MONGO_URL}`)
       await mongoose.connect('mongodb://localhost:27017/store')
        console.log("MongoDB connected successfully");
        
      } catch (error) {
        console.log(error.message);
       
      }

}

module.exports=connectDB