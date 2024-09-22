import express from "express"
const app = express()
const port = 3000

app.use(getMetaData)

function getMetaData (req, res, next) {
    let requestMethod = (req.method);
    let requestUrl = (req.protocol+"//" + req.hostname+ ":"+port + req.originalUrl);
    let time = new Date()
    res.send({
        Time: time,
        Request_Method:requestMethod,
        URL:requestUrl
    })
    next()

}
app.get("/", function(req,res){
    res.send("Hello World")
})

app.listen(port,()=>{
    console.log('Running at port',port);
    
})