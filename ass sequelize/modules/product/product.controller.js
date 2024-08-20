import { Op } from "sequelize"
import productModel from "../../database/models/product.model.js"
import userModel from "../../database/models/user.model.js"

export const getAllProduct=async(req,res)=>{
    const product=await productModel.findAll({include:userModel})
    res.json({msg:"success",product})
}
export const addProduct=async(req,res)=>{
    const product=await productModel.create(req.body)
    res.json({msg:"success",product})
 }

 // delete product

export const deleteProduct=async(req,res)=>{
    const {id}=req.body
    const product=await productModel.destroy({
        where:{[Op.and]:{id}}
    })
    if(product){
        res.json({msg:"success"})
    }else{
        res.json({msg:"not found"})
    }
}