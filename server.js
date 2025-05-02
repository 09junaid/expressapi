import dotenv from "dotenv"
dotenv.config();
import express from "express"
import  {router}  from "./routes/productRoute.js";
import { connectDB } from "./config/db.js";
const app=express();
const PORT=1000;
app.use("/api/products",router)
app.get("/",(req,res)=>{
 res.send("Hello Junaid")
})
const start=async()=>{
try {
  
  app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
  })
  await connectDB();
} catch (error) {
  console.log(`Error ${error}`)
}
}
start();