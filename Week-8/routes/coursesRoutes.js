const {Router}=require("express")
const courseRoutes=Router()
const {purchaseModel,courseModel}=require("../database/db.js")

courseRoutes.post("/purchase", async function (req,res) {
    const userId=req.userId
    const courseID=req.body.courseID

 try {
    await courseModel.create({
        userId,
        courseID
    })
    res.status(200).json({message:"course purchases",staus:"purchased"})
 } catch (error) {
    res.json({message:"Someting Went Wrong",error:error})
 }

})
courseRoutes.get("/preview",async function (req,res) {

try{
    const allCourses=await courseModel.find({})
    res.status(200).json({message:"All Courses List", courses:allCourses})
}catch(error){
res.status(200).json({message:"Something went wrong", error:error})
} 
})

module.exports={
    courseRoutes:courseRoutes
}