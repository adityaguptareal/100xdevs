const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const {Admin,User,Course}=require("../db/index")
const jwt=require("jsonwebtoken")
const JWT_SECRET="TESTJWTADMIN"

// Admin Routes
router.post('/signup', async(req, res) => {
    // Implement admin signup logic
    const username=req.body.username
    const password=req.body.password
    await Admin.create({
        username:username,
        password:password
    })
    res.status(400).json({message:"Admin Created Successfully"})
});

router.post('/signin', async(req, res) => {
    // Implement admin signup logic
    const username=req.body.username
    const password=req.body.password
   const userCheck =Admin.findOne({
    username:username,
    password:password
   })
   if(userCheck){
    const token=jwt.sign({username},JWT_SECRET)
    res.json({token:token})
   }
   else{
    res.json({message:"Invalid Crdentials"})
   }
});

router.post('/courses', adminMiddleware, async(req, res) => {
    // Implement course creation logic
    const title=req.body.title
    const description=req.body.description
    const price=req.body.price
    const imageLink=req.body.imageLink
    

    const newCourse=await Course.create({
        title,
        description,
        price,
        imageLink        
    })

    res.json({
        msg:"Course Created Successfully",courseId:newCourse._id
    })
});

router.get('/courses', adminMiddleware, async(req, res) => {
    // Implement fetching all courses logic
    const allCourses=await Course.find({
    })
    res.json({
        msg:"All Courses",'Courses':allCourses
    })

});

module.exports = router;