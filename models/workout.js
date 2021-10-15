const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema (
    {
        day: {
            type: Date,
            default: Date.now,
        },
        exercise: [
            {
                type: {
                    type: String,
                    trim: true,
                    required: "Enter exercise type!",
                },
                name: {
                    type: String,
                    trim: true,
                    required: "Enter exercise name!",
                },
                duration: {
                    type: Number,
                    required: "Enter exercise duration!",
                },
                distance: {
                    type: Number,
                },
                weight: {
                    type: Number,
                },
                sets: {
                    type: Number,
                },
                reps: {
                    type: Number,
                },
            },
        ],
    },
);


const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;