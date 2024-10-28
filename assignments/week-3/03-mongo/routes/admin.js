const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin } = require("../db");
const router = Router();

// Admin Routes
router.post('/signup', async(req, res) => {
   const username=req.body.username
   const password=req.body.password
   await Admin.create({
    username:username,
    password:password
   }
)
res.status(404).json({
    msg:"Admin Signup Successfully"
})
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
});

module.exports = router;