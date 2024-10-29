const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");

// User Routes
router.post('/signup', async(req, res) => {
    // Implement user signup logic
    const username = req.body.username
    const password = req.body.password
    const user = await User.create({
        username,
        password
    })
    res.json({
        msg: "user signup successfully",
    })
});

router.post('/signin', async(req, res) => {
    // Implement admin signup logic
    const username=req.body.username
    const password=req.body.password
   const userCheck = await Admin.findOne({
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

router.get('/courses', async(req, res) => {
    // Implement listing all courses logic
    const response = await Course.find({})
    res.json({ course: response })
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
});

module.exports = router