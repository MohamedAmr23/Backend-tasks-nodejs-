const http=require("http")
let user=[
    {id:"1",name:"mohamed",age:"12"},
    {id:"1",name:"ahmed",age:"12"},
    {id:"1",name:"nabil",age:"12"},
]

http.createServer((req,res)=>{
    // get  user
    const {url,method}=req
    if(url=='/' && method == 'GET'){
        res.end(JSON.stringify(user) )
        // add user
    }else if (url=='/addUser' && method=='POST'){
        let globalData;
        req.on('data',(chunk)=>{
            globalData=chunk;
        })
        req.on('end',()=>{
         let parseData=  JSON.parse(globalData)
         let isExised=user.find((ele)=>ele.id==parseData.id)
         if (isExised){
            res.end("sorry infomation is already founed ")
         }else{
            user.push(parseData)
            res.end(JSON.stringify(parseData))
         }   
            
        })
        // update user
    }
    else if(url=='/updateUser' && method=="PUT"){
        let global;
        req.on('data',(chunk)=>{
            global=chunk;
        })
        req.on('end',()=>{
         let parseData=  JSON.parse(global)
         let isExised=user.find((ele)=>{return ele.id==parseData.id})
         if (isExised){
            let index=user.indexOf(isExised);
            user[index]=parseData
            res.write(JSON.stringify(user))
            res.end()
         }else{
            res.end("user not fount to be updated")
         }   
        })
    }else if(url=='/sorted' && method=='GET'){
        // let sortedUser=user.sort((a,b)=>{
        //     if(a.name<b.name){
        //         return -1
        //     }
        //     if(a.name>b.name){
        //         return 1
        //     }
        //     return 0;
        // })
        let sortedUser=user.sort((a,b)=>a.name.localeCompare(b.name))
        res.write(JSON.stringify(sortedUser))
        res.end()
    }else if(url=='/deleteUser' && method=='DELETE'){
        let global;
        req.on('data',(chunk)=>{
            global=chunk;
        })
        req.on('end',()=>{
         let parseData=  JSON.parse(global)
         let isExised=user.find((ele)=>{return ele.id==parseData.id})
         if (isExised){
            let index=user.indexOf(isExised);
            user.splice(index,1)
            res.write(JSON.stringify(user))
            res.end()
         }else{
            res.end("user not fount to be deleted")
         }   
        })
    }else if(url=='/getUser' && method=='GET'){
        let global;
        req.on('data',(chunk)=>{
            global=chunk;
        })
        req.on('end',()=>{
         let parseData=  JSON.parse(global)
         let isExised=user.find((ele)=>{return ele.id==parseData.id})
         if (isExised){
            res.write(JSON.stringify(parseData))
            res.end()
         }else{
            res.end("user not fount ")
         }   
        })
    }
    
}).listen(2000,()=>{
    console.log('server is running')
})