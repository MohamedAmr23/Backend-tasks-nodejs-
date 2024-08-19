import userModel from "../../database/models/user.model.js"

export const addUser=async(req,res)=>{
   const user=await userModel.create(req.body)
   res.json(user)
}

export const getAllUser=async(req,res)=>{
    const user=await userModel.findAll({})
    if(user.length>0){
        res.json({msg:"success",user})
    }else{
        res.json({msg:"not found"})
    }
}

export const getUser=async(req,res)=>{
    const user=await userModel.findOne({where:{id:req.body.id}})
    if(user){
        res.json({msg:"success",user})
    }else{
        res.json({msg:"not found"})
    }
}