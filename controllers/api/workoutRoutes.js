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
        const dbNewWorkouts = await db.Workout.create(body);
        res.status(200).json(dbNewWorkouts);
    } catch (err) {
        err && res.status(500).json(err);
    }
});

router.put('/:id', async ({ params, body }, res) => {
    try {
        const dbUpdatedWorkouts = await db.Workout.findByIdAndUpdateOne(
            params.id,
            { $push: { exercises: body } },
            { 
                new: true,
                runValidators: true,
            }
        );
        res.status(200).json(dbUpdatedWorkouts);
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