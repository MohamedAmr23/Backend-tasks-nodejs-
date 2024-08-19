import express from 'express'
import userRouter from './modules/user/user.routes.js'
import productRouter from './modules/product/product.routes.js'
import { dbConnection } from './database/dbConnection.js'
dbConnection()
const app = express()
const port = 2000
app.use(express.json())
app.use('/user',userRouter)
app.use('/product',productRouter)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))