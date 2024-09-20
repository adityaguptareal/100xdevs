const express = require("express")
const app = express()
const jwt = require("jsonwebtoken")
const JWT_SECRET = "fkjdsfjkdsfa"
const port = 5000

app.use(express.json())

function auth(req, res, next) {
    const userToken = req.headers.token
    const decryptToken = jwt.verify(userToken, JWT_SECRET)
    if (decryptToken.username) {
        req.username = decryptToken.username
        next()
    }
    else {
        res.json({ message: "You are not loggedd in" })
    }
}

const UserData = []

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/public/index.html")
})

app.post("/signup", function (req, res) {
    const username = req.body.username
    const password = req.body.password
    UserData.push({ username: username, password: password })
    res.json({ msg: "You Signed up Succesfully" })
})

app.post("/signin", function (req, res) {

    const username = req.body.username
    const password = req.body.password
    const user = UserData.find(u => u.username === username && u.password === password)
    if (user) {
        const usrToken = jwt.sign({ username: username }, JWT_SECRET)
        res.json({username:username,password:password,token:usrToken})  
    }
    else {
        // res.json({msg:"You enter incorrect credentials"})
        return res.json({ msg: "You enter incorrect credentials" })

    }
})

app.get("/me", auth, function (req, res) {
    const userToken = req.headers.token   
    const decryptUser = jwt.verify(userToken, JWT_SECRET)
    const user = decryptUser.username
    const foundUser = UserData.find(u => u.username === user)
    if (foundUser) {
        res.json({ username: foundUser.username, password: foundUser.password })
    }
    else {
        res.json({msg:"Invalid Token"})
    }
})

app.listen(port, () => {
    console.log('App is running at port', port);

})