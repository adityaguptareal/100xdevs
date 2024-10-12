const {Router}=require("express")
const userRoutes=Router()
const {userModel}=require("../database/db")

userRoutes.post("/signup",function (req,res) {
    res.send("Signup Route")
})
userRoutes.post("/signin",function (req,res) {
    res.send("signin Route")
})
userRoutes.get("/courses",function (req,res) {
    res.send("courses Route")
})

module.exports={
    userRoutes:userRoutes
}