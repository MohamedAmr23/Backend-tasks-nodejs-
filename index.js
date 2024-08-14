const express = require('express')
const app = express()
const port = 2000
app.use(express.json())
const mysql=require('mysql2')
const query=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'workshop'
})
// get users
app.get('/',(req,res)=>{
    query.execute(`SELECT * FROM users INNER JOIN products on users.id=products.userId`,(err,data)=>{
        if(err){
            res.json({message:err})
        }else{
            res.json({message:data})
        }
    })
})

// add user

app.post('/user',(req,res)=>{
    const{email}=req.body
    query.execute(`SELECT * FROM users WHERE email='${email}' `,(err,data)=>{
        if(err){
            res.json("error")
        }else{
            if(data.length>0){
                res.json("user already exist")
            }else{
                const {name,email,age}=req.body
                query.execute(`INSERT INTO users(name, email, age) VALUES ('${name}','${email}','${age}')`,(err,data)=>{
                    if(err){
                        res.json({message:err})
                    }else{
                        res.json({message:"success",data})
                    }
                })
            }
        }
    })
})

// update

app.put('/user',(req,res)=>{
    const {id,name,email,age}=req.body
    query.execute(`UPDATE users SET name='${name}',email='${email}',age='${age}' WHERE id=${id}`,(err,data)=>{
        if(err){
            res.json("failed")
        }else{
            res.json({message:"success",data})
        }
    })
})


// delete

app.delete('/user',(req,res)=>{
    const {id}=req.body
    query.execute(`DELETE FROM users WHERE id=${id}`,(err,data)=>{
        if(err){
            res.json({message:err})
        }else{
            res.json({message:"success",data})
        }
    })
})

// search user where name starts with 'a' and age less than 30

app.get('/user',(req,res)=>{
    const{name,age}=req.query
    query.execute(`SELECT * FROM users WHERE name LIKE '${name}%' AND age>${age};`,(err,data)=>{
        if(err){
            res.json({message:err})
        }else{
            res.json({message:"success",data})
        }
    })
})

// get user by id
app.get('/userId',(req,res)=>{
    const{id}=req.query
    query.execute(`SELECT * FROM users WHERE id IN (${id})`,(err,data)=>{
        if(err){
            res.json({message:err})
        }else{
            res.json({message:"success",data})
        }
    })
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))


