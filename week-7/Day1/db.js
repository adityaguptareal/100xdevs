const mongoose=require("mongoose")
const Schema=mongoose.Schema
const ObjectId=mongoose.ObjectId

const user=new Schema({
    name:String,
    email:String,
    password:String
})

const Todo=new Schema({
  Todo:String,
  done:Boolean,
  UserId:ObjectId  
})

const usermodel=mongoose.model("users",user)
const Todomodel=mongoose.model("Todos",Todo)

module.exports={usermodel:usermodel,Todomodel:Todomodel}
