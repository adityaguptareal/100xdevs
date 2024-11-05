const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post('/signup', async (req, res) => {
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

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const response = await Course.find({})
    res.json({ course: response })
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const username = req.headers.username
    const password = req.headers.password
    const courseId = req.params.courseId

    try {
        const purchase = await User.updateOne({
            username: username,
            password: password
        },
            {
                "$push": {
                    purchasedCourses: courseId
                }
            })
        res.json({
            msg: "Purchase Completed",
            purchase: purchase

        })
    } catch (error) {
        console.log(error);
    }

});

router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    // Implement fetching purchased courses logic
    const user=await User.findOne({username:req.headers.username})
    const allUserCourses=await Course.find({
        _id:user.purchasedCourses
    })
    res.json({
        allUserCourses:allUserCourses
    })
    

});

module.exports = router