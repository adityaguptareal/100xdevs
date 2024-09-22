const express=require("express")
const app=express()
const port=3000
app.get("/",function(req,res){
    res.send("This is a Calculator Backend")
})

app.get("/add/:a/:b",function(req,res){
    const a=parseInt(req.params.a)
    const b=parseInt(req.params.b)
    res.send({"Add":`${a+b}`})
    
})
app.get("/subtract/:a/:b",function(req,res){
    const a=parseInt(req.query.a)
    const b=parseInt(req.query.b)
    res.send({"Subtract":`${a-b}`})
    
})
app.get("/mutlitply/:a/:b",function(req,res){
    const a=parseInt(req.query.a)
    const b=parseInt(req.query.b)
    res.send({"Multiply":`${a*b}`})
    
})
app.get("/divide/:a/:b",function(req,res){
    const a=parseInt(req.query.a)
    const b=parseInt(req.query.b)
    res.send({"Divide":`${a/b}`})
    
})


app.listen(port,()=>{
    console.log('running at port', port);
    
})
