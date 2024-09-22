const express = require("express")
const jwt = require("jsonwebtoken")
const JWT_Secret = "sdsfds@efff"
const mongoose = require("mongoose")
const { usermodel, Todomodel } = require("./db")
const dbConnect = mongoose.connect("mongodb+srv://adityaguptareal:LK9dhOMRR2Zyy4hc@cluster0.3rcjj.mongodb.net/TodoApp")
const app = express()
const port = 3000
app.use(express.json())

function authentication(req, res, next) {
    const token = req.headers.token
    const decryptData = jwt.verify(token, JWT_Secret)
    if (decryptData) {
        req.userID = decryptData.id
        next()
    }
    else {
        res.status(403).json({ "Message": "Incorrect Credentails" });

    }
}

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html")
})

app.post("/signup", async function (req, res) {
    const name = req.body.name
    const password = req.body.password
    const email = req.body.email

    try {
        let userData = await usermodel.create({
            "name": name,
            "email": email,
            "password": password
        })
        await userData.save()
    } catch (error) {
        alert("Some error has been Occured")
    }
    res.json({ msg: "Send Successfully" })
})

app.post("/signin", async function (req, res) {
    const password = req.body.password
    const email = req.body.email
    const user = await usermodel.findOne({
        email: email,
        password: password
    })
    if (user) {
        const token = jwt.sign({ id: user._id }, JWT_Secret)
        res.json({
            "Token": token
        })
    }
    else {
        res.status(403).json({ message: "Incorrect Credentials" })
    }
})

app.post("/Todo", authentication, async function (req, res) {
    const userID = req.userID
    const title = req.body.title
   try {
    let Todo = await Todomodel.create({
        Todo: title,
        UserId: userID,
        done: false
    })
    await Todo.save()
    res.send("Todo Created Successfully")                     
   } catch (error) {
    res.status(500).json({"Message":error})
   }
})
app.get("/Todos", authentication, async function (req, res) {
    const userID = req.userID
    const Todos=await Todomodel.find({
        userID:userID
    })
    res.json({Todos:Todos})
})

app.listen(port, () => {
    console.log('App is running at port', port);

})

