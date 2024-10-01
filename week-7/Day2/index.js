const express = require("express");
const bcrypt = require("bcrypt")
const { UserModel, TodoModel } = require("./db");
const { auth, JWT_SECRET } = require("./auth");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

let dbConnection=mongoose.connect("mongodb+srv://adityaguptareal:LK9dhOMRR2Zyy4hc@cluster0.3rcjj.mongodb.net/")

const app = express();
app.use(express.json());

app.post("/signup", async function (req, res) {
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    const hashPassword = await bcrypt.hash(password, 2)
    console.log(hashPassword);
    


    await UserModel.create({
        email: email,
        password: hashPassword,
        name: name
    });

    res.json({
        message: "You are signed up"
    })
});


app.post("/signin", async function (req, res) {
    const email = req.body.email;
    const password = req.body.password;

    const response = await UserModel.findOne({
        email: email,
        password: password,
    });

    if (response) {
        const token = jwt.sign({
            id: response._id.toString()
        }, JWT_SECRET);

        res.json({
            token
        })
    } else {
        res.status(403).json({
            message: "Incorrect creds"
        })
    }
});


app.post("/todo", auth, async function (req, res) {
    const userId = req.userId;
    const title = req.body.title;
    const done = req.body.done;

    await TodoModel.create({
        userId,
        title,
        done
    });

    res.json({
        message: "Todo created"
    })
});


app.get("/todos", auth, async function (req, res) {
    const userId = req.userId;

    const todos = await TodoModel.find({
        userId
    });

    res.json({
        todos
    })
});

app.listen(3000);