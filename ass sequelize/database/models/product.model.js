import { DataTypes } from "sequelize";
import { sequelizeConnection } from "../dbConnection.js";
import userModel from "./user.model.js";

const productModel= sequelizeConnection.define('product',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    title:DataTypes.STRING(100),
    description:DataTypes.STRING(400),
    price:{
        type:DataTypes.INTEGER(100)
    }   
},{
    timestamps:true
})
sequelizeConnection.sync()
// user contain many product
userModel.hasMany(productModel,{
    onDelete:"CASCADE",
    onUpdate:"CASCADE"
})

// one product
productModel.belongsTo(userModel)
export default productModel