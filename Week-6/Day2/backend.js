const express = require("express")
const jwt=require("jsonwebtoken")
const JWT_SECRET="randomadityatest"
const app = express()
const port = 3000

app.use(express.json())
const userDetails = []

// function genearateToken() {
//     let token = ""
//     let options = [
//         'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
//         '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
//     ];
//     for (let index = 0; index < 32; index++) {
//         token = token + options[Math.floor(Math.random() * options.length)]


//     }
//     return token


// }

app.get("/", function (req, res) {
    res.send("Hello World")
})

app.post("/signup", function (req, res) {
    const username = req.body.username
    const password = req.body.password
    userDetails.push({ username: username, password: password })
    res.json({ msg: "You are succefully signed up" })
    console.log(userDetails);
    

})
app.post("/signin", function (req, res) {
    const username = req.body.username
    const password = req.body.password
    const user = userDetails.find((u) => {
        if (u.username == username && u.password == password) {
            const userToken = jwt.sign({username:username},JWT_SECRET)
            // u.token = userToken
            res.json({ "username":username,"password":password,"Token": userToken })

        }
        else {
            res.status(403).send({
                msg: "Invalid Username and Password"
            })

        }
    })
    console.log(userDetails);
    
})

// Authentication End Point
app.get("/user",function(req,res){
    let userToken=req.headers.token
    const decordeInformation=jwt.verify(userToken,JWT_SECRET) //Convert JWT into json
    const username=decordeInformation.username
    let users=userDetails.find(user=>user.username===username)
    console.log(users);
    
    if (users){
        res.send({"username":users.username,"password":users.password})
    }
    else{
        res.send("Invalid Token")
    }
    console.log(userDetails);
})
app.listen(port, () => {
    console.log('App is running at port', port);

})