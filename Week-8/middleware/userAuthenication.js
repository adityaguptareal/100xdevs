const jwt=require("jsonwebtoken")
const {JWT_SECRET_USER}=require("../config.js")

function userMiddleware(req,res,next) {
     const token=req.headers.token
     const verification=jwt.verify(token,JWT_SECRET_USER)
     if(verification){
        req.userId=verification.idToken,
        next()
     }
     else{
        res.status.json({
            message:"You are not signed in"
        })
     }

}

module.exports={
    userMiddleware
}