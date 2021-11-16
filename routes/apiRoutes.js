const router = require('express').Router();

const db = require("../models/workouts.js")

router.get("/api/workouts", (req, res) => {
        db.find()
        .then((data) => {
            res.json(data)
        })
        .catch((error) =>{
            res.json(error)
        })
});

router.get("/api/workouts/range", (req, res) => {
    db.find()
    .then((data) => {
        res.json(data)
    })
    .catch((error) => {
        res.json(error)
    })
})

router.post("/api/workouts", ({body}, res) => {
    db.create(body)
    .then((data) => {
        res.json(data)
    })
    .catch((error) => {
        res.json(error)
    })
})

router.put("/api/workouts/:id", ({body, params}, res) => {
    db.findByIdAndUpdate(params.id, {$push: {exercises: body}})
    .then((data) => {
        res.json(data)
    })
    .catch((error) => {
        res.json(error)
    })
})

module.exports = router;