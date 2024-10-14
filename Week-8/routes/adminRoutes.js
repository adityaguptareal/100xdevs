const { Router } = require("express")
const adminRoutes = Router()
const bcrypt = require("bcrypt")
const jsonwebtoken = require("jsonwebtoken")
const { adminModel, courseModel } = require("../database/db")
const { z } = require("zod")
const { JWT_SECRET_AMDIN } = require("../config")
const { adminMiddleware } = require("../middleware/adminAuthenication")

adminRoutes.post("/signup", async function (req, res) {
    const requiredData = z.object({
        email: z.string().email(),
        password: z.string().max(20).min(6),
        firstName: z.string().max(20),
        lastName: z.string().max(20)
    })
    const validateData = requiredData.safeParse(req.body)
    if (!validateData.success) {
        res.status(406).json({
            status: "Invalid Format",
            error: validateData.error
        })
        return
    }
    const { email, password, firstName, lastName } = validateData.data
    const hashedPassword = await bcrypt.hash(password, 8)
    try {
        const creatingUser = await adminModel.create({
            email: email,
            password: hashedPassword,
            firstName: firstName,
            lastName: lastName
        })
        await creatingUser.save()
        res.status(201).json({ message: "user signed up successfully !" })
    } catch (error) {
        res.status(500).json({ "error": error, message: "error in db entry" })
    }
})

adminRoutes.post("/signin", async function (req, res) {
    const signinData = z.object({
        email: z.string().email(),
        password: z.string().max(20)
    })

    const validateSiginData = signinData.safeParse(req.body)
    if (!validateSiginData.success) {
        res.status(406).json({ message: "Invalid Format", error: validateSiginData.error })
        return
    }

    const { email, password } = validateSiginData.data
    try {
        var userCheck = await adminModel.findOne({
            email: email
        })
        if (!userCheck) {
            res.json({ error: "user not found" })
            return
        }
    } catch (error) {
        res.status(500).json({ error: "database error while checking" })
    }

    const passwordCheck = await bcrypt.compare(password, userCheck.password)


    if (passwordCheck) {
        const token = jsonwebtoken.sign({
            idToken: userCheck._id
        }, JWT_SECRET_AMDIN)
        res.json({ message: "signin successfully", idToken: token })
    }
    else {
        res.json({ error: "Invalid Credentials" })
    }


})
adminRoutes.post("/course", adminMiddleware, async function (req, res) {
    const adminID = req.adminId
    const { title, description, imageUrl, price, } = req.body
    const course= await courseModel.create({

        title: title,
        description: description,
        imageUrl: imageUrl,
        price: price,
        creatorId: adminID
    })

    res.status(200).json({
        message: "course created",
        courseID:course._id
    })



})
adminRoutes.put("/course", function (req, res) {
    res.json("update courseEndpoint")
})
adminRoutes.get("/course/bulk", function (req, res) {
    res.json("courseEndpoint")
})

module.exports = {
    adminRoutes: adminRoutes
}