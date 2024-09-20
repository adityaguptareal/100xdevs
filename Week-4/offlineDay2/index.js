const express = require("express")
const app = express()
function isOldEnough(req, res, next) {
    if (age >= 14) {
        next()
    }
    else {
        res.json({ msg: "Sorry You are not eligible" })
    }
}
app.get("/ride1", isOldEnough, function (req, res) {

    res.json({ msg: "You are eligible" })
})
app.get("/ride2", isOldEnough, function (req, res) {

    res.json({ msg: "You are eligible" })
})
app.listen(3000)