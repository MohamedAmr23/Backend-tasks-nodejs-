import { DataTypes } from "sequelize";
import { sequelizeConnection } from "../dbConnection.js";

const userModel= sequelizeConnection.define('user',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:DataTypes.STRING(100),
    email:{
        type:DataTypes.STRING(100),  
        unique:true
    },
    age:DataTypes.INTEGER
    
})

export default userModel