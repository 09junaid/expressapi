import mongoose from "mongoose";
export const connectDB=async()=>{
  try {
    await mongoose.connect(process.env.DB_URL,{
      dbName:process.env.DB_NAME
    })
    console.log(`MongoDB Connected`)
  } catch (error) {
    console.log(`Network issue ${error}`)
  }
}