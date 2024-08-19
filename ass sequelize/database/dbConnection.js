import { Sequelize } from "sequelize";

export const sequelizeConnection = new Sequelize('sequelize2', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
  });

export const dbConnection=async()=>{
    return await sequelizeConnection.sync({alter:true,force:false})
    .then((res=>console.log('running')))
    .catch(err=>console.log('err'))
}