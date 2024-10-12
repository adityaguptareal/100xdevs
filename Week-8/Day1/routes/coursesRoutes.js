const {Router}=require("express")
const courseRoutes=Router()
courseRoutes.post("/purchase",function (req,res) {
    res.send("Course Purchase Routes")
})
courseRoutes.get("/preview",function (req,res) {
    res.send("Courses Preview Routes")
})

module.exports={
    courseRoutes:courseRoutes
}