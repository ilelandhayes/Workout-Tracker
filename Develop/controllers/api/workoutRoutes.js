const router = require("express").Router();
const db = require("../../models/exercises");

router.get("/api/exercise", (req, res) => {
    db.find({})
    .sort({ date: -1 })
    .then(dbWorkouts => {
        res.json(dbWorkouts);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

module.exports = router;