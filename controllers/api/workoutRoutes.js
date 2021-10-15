const router = require("express").Router();
const db = require("../../models");

router.get('/', async ({ res }) => {
    try {
        const dbWorkouts = await db.Workout.find({});
        res.status(200).json(dbWorkouts);
    } catch (err) {
        err && res.status(500).json(err);
    }
});

router.post('/', async ({ body }, res) => {
    try {
        const dbNewWorkout = await db.Workout.create(body);
        res.status(200).json(dbNewWorkout);
    } catch (err) {
        err && res.status(500).json(err);
    }
});

router.put('/:id', async ({ params, body }, res) => {
    try {
        const dbUpdatedWorkout = await db.Workout.findByIdAndUpdate(
            params.id,
            { $push: { exercises: body } },
            { 
                new: true,
                runValidators: true,
            }
        );
        res.status(200).json(dbUpdatedWorkout);
    } catch (err) {
        err && res.status(500).json(err);
    }
});

router.get('/range', async ({ res }) => {
    try {
        const dbWorkouts = await db.Workout.find({});
        res.status(200).json(dbWorkouts);
    } catch (err) {
        err && res.status(500).json(err);
    }
});

module.exports = router;