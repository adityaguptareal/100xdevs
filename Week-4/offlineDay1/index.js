const express = require("express")
const app = express()

var users = [{
    "name": "Aditya",
    kidneys: [{
        healthy: false,
    }, {
        healthy: true,
    }, {
        healthy: true
    }, {
        healthy: true
    }, {
        healthy: false
    }, {
        healthy: true
    }]

}]

app.use(express.json())

app.get("/", function (req, res) {
    const userKidneys = users[0].kidneys
    console.log(userKidneys);

    const totalKidneys = userKidneys.length

    // Getting Healthy Kidneys
    let healthyKidneys = 0
    for (let index = 0; index < totalKidneys; index++) {
        if (userKidneys[index].healthy) {
            healthyKidneys = healthyKidneys + 1
        }

    }

    // getting unhealthy kidneys
    let unhealthyKidneys = totalKidneys - healthyKidneys
    res.json({
        unhealthyKidneys,
        healthyKidneys,
        totalKidneys,
        userKidneys
    })


})
app.post("/", function (req, res) {
    const isHealthy = req.body.isHealthy
    users[0].kidneys.push({ healthy: false })
    res.json({
        msg: "Kidney Added"
    })

})

app.put("/", function (req, res) {
    for (let index = 0; index < users[0].kidneys.length; index++) {

        users[0].kidneys[index].healthy = true
    }
    res.json({})
})

app.delete("/", function (req, res) {
    const newKidneys = []
    for (let index = 0; index < users[0].kidneys.length; index++) {
        if (users[0].kidneys[index].healthy) {
            newKidneys.push({
                healthy: true
            })
        }

        users[0].kidneys = newKidneys
    }
    res.json({msg:"done"})
})
app.listen(3000)