const {Router}=require("express")
const adminRoutes=Router()
adminRoutes.post("/siginup",function (req,res) {
    res.json("Admin Signup Endpoint")
})
adminRoutes.post("/signin",function (req,res) {
    res.json("Admin signin Endpoint")
})
adminRoutes.post("/course",function (req,res) {
    res.json("Admin courseEndpoint")
})
adminRoutes.put("/course",function (req,res) {
    res.json("update courseEndpoint")
})
adminRoutes.get("/course/bulk",function (req,res) {
    res.json("courseEndpoint")
})

module.exports={
    adminRoutes:adminRoutes
}