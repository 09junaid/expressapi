import dotenv from "dotenv";
dotenv.config();
import { connectDB } from "./config/db.js";
import { productModel } from "./Models/productModel.js";
import product from './product.json' assert {type: "json"}
const start = async () => {
  try {
    await connectDB();
    await productModel.create(product);
    console.log(`Data Inserted`)
  } catch (error) {
    console.log(`Error ${error}`)
  }
 
};

start();