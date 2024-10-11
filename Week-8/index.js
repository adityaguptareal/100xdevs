const express=require("express")
const app= express()
const port=3000


app.post("/user/signup",function(req,res){
    res.send("user endpoint")
})

app.post("/user/signin",function(req,res){
    res.send("user endpoint")
})
app.get("user/purchases/courses",function(req,res){
    res.send("Course Endpoint")
})

app.get("course/purchase",function(req,res){
    res.send("Course Endpoint")
})

app.get("/courses",function(req,res){
    res.send("Course Endpoint")
})



app.listen(port,()=>{
    console.log('App is running at port', port);
    
})
