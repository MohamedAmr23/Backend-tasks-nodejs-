import { Op, where } from "sequelize"
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
// filter user which age is less than 30 and name starts wits a 
export const searchUser=async(req,res)=>{
    const user=await userModel.findAll({where:{age:{[Op.lte]:30}},name:{[Op.like]:'a%'}})
    res.json({user})
}


export const userIn=async(req,res)=>{
    // you can search by id in query req.query ?id=
    const user=await userModel.findAll({where:{id:{[Op.in]:[req.body.id]}}})
    res.json({user})
}

// update user

export const updateUser=async(req,res)=>{
    const {name,email}=req.body
    const isExist=await userModel.findOne({where:{email}})
    if(isExist){
        if(isExist.email==email){
            await userModel.update({name,email},{where:{email}})
            res.json("done")
        }else{
            res.json("not available")
        }
    }else{
        res.json({msg:"not found"})
    }
}

// delete user

export const deleteUser=async(req,res)=>{
    const {email}=req.body
    const isExist=await userModel.findOne({where:{email}})
    if(isExist){
        if(isExist.email==email){
            await userModel.destroy({where:{email}})
            res.json("done")
        }else{
            res.json("not available")
        }
    }else{
        res.json({msg:"not found"})
    }
}