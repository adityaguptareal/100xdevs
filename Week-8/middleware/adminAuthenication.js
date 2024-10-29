const jwt=require("jsonwebtoken")
const {JWT_SECRET_AMDIN}=require("../config.js")

function adminMiddleware(req,res,next) {
     const token=req.headers.token
     const verification=jwt.verify(token,JWT_SECRET_AMDIN)
     if(verification){
        req.adminId=verification.id,
        next()
     }
     else{
        res.status.json({
            message:"You are not signed in"
        })
     }

}

module.exports={
    adminMiddleware
}