const express=require('express')
const app=express()
const users=[
    {id:"1",name:"mohamed",age:"18"},
    {id:"2",name:"wael",age:"20"},
    {id:"3",name:"ali",age:"30"},
]

app.use(express.json())
// get user

app.get("/allUser",(req,res)=>{
    res.json({msg:"done",users})
})

// add new user

app.post("/addUser",(req,res)=>{
    const {id,name,age}=req.body
    let isExist=users.find((user)=>{return user.id===id})
    if(isExist){
        res.json({msg:"user is already exist"})
    }else{
        users.push({id,name,age})
        res.json({msg:"user added",users})
    }
})

// update user
app.put('/updateUser',(req,res)=>{
    const {id,name,age}=req.body
    let isExist=users.find((user)=>{return user.id===id})
    if(isExist){
        let index=users.indexOf(isExist)
        users[index]={id,name,age}
        res.json({msg:"user updated",users})
    }else{
        res.json({msg:"user not found to be updated"})
    }
})

// delete user
app.delete("/deleteUser",(req,res)=>{
    const {id}=req.body
    let isExist=users.find((user)=>{return user.id===id})
    if(isExist){
        let index=users.indexOf(isExist)
        users.splice(index,1)
        res.json({msg:"deleted successfully",users})
    }else{
        res.json({msg:"user not found to be deleted"})
    }
})

// get user
app.get("/getUser",(req,res)=>{
    const {id}=req.body
    let isExist=users.find((user)=>{return user.id===id})
    if(isExist){
        res.json({msg:"user ",user:isExist})
    }else{
        res.json({msg:"user not found "})
    }
})

// sort user
app.get("/userSorted",(req,res)=>{
    let sortedUser=users.sort((a,b)=>a.name.localeCompare(b.name))
    res.json({msg:"user Sorted",users:sortedUser})
})
app.listen(2000,()=>{
    console.log('server is running')
})