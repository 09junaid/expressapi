import { productModel } from "../Models/productModel.js"
const getAllProducts=async(req,res)=>{
  try {
    const data=await productModel.find({});
    res.status(200).json({msg:"successfully",success:true,data:data})
  } catch (error) {
    res.status(500).json({msg:"something went wrong!",Error:error})
  }
}

const getAllProductsTesting=async(req,res)=>{
  try {
    const data=await productModel.find({});
    res.status(200).json({msg:"successfully",success:true,data:data})

  } catch (error) {
    res.status(500).json({msg:"something went wrong!",Error:error})

  }
}
export {getAllProducts,getAllProductsTesting}