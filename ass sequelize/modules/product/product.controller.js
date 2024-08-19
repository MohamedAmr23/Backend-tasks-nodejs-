import productModel from "../../database/models/product.model.js"

export const addProduct=async(req,res)=>{
    const user=await productModel.create(req.body)
    res.json(user)
 }