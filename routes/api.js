const router = require ('express').Router()

router.post("/workouts", (req,res) => {
    workout.create()
    .then(dbWorkout => {
        res.json(dbWorkout)
    })
})
.catch(err => {
    res.json(err)
})

