const express = require("express")
const app = express()
const port = 3000
const jwt = require("jsonwebtoken")
const JWT_SECRET = "coveritdownmklm"

app.use(express.json())

const users = []

app.get("/", function (req, res) {
    res.send("Hello Aditya")
})

app.post("/signup", function (req, res) {
    const username = req.body.username
    const password = req.body.password
    users.push({ username: username, password: password })
    res.send("Successfully Signed up")
    console.log('Signed up successfully');
})

app.post("/signin", function (req, res) {
    const username = req.body.username
    const password = req.body.password
    const user = users.find((u) => {
        if (u.username === username && u.password === password) {
            let userToken = jwt.sign({"username":username}, JWT_SECRET)
            res.json({ "username": username, "password": password, "Token": userToken })
        }
        else{
            res.status(403).send("Invalid Username and Password")
        }
    })
})

app.get("/auth",function(req,res){
    const getToken=req.headers.token
    const decryptUser=jwt.verify(getToken,JWT_SECRET)
    const user=decryptUser.username
    let findUser=users.find((u)=>{
     if (u.username===user) {
        res.json({username:u.username,password:u.password})
     }
     else{
        res.status(403).send("Invalid Token")
     }   
    })
})
app.listen(port, () => {
    console.log('App is running at port', port);

})

