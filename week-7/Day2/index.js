const express = require("express");
const {z}=require("zod")
const bcrypt = require("bcrypt")
const { UserModel, TodoModel } = require("./db");
const { auth, JWT_SECRET } = require("./auth");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

let dbConnection=mongoose.connect("mongodb+srv://adityaguptareal:LK9dhOMRR2Zyy4hc@cluster0.3rcjj.mongodb.net/")

const app = express();
app.use(express.json());

app.post("/signup", async function (req, res) {
    const requiredBody=z.object({
        email:z.string(),
        name:z.string(),
        // adding check password should be string with mininum of 6 and maximum of 8 character.
        password:z.string().min(6).max(8)
    })

    const parsebody=requiredBody.safeParse(req.body)
    if(!parsebody.success){
        res.json({
            "Error":"Invalid Format",
            "Exact Error":parsebody.error
        })
        return
    }
    
    
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    // creating a hash passowrd
    const hashPassword = await bcrypt.hash(password, 8)
    // storing user data in the database
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

    // Finding the user email from the db
    const response = await UserModel.findOne({
        email: email,
    });

    

    if(!response){
        res.status(403)
        .json({
            Message:"User Not Found"
        })
    }

    // Checking the hash password is valid or not
const passwordMatch= await bcrypt.compare(password,response.password)


    if (passwordMatch) {
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