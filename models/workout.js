const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema (
    {
        day: {
            type: Date,
            default: Date.now,
        },
        exercises: [
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
    {
        toJSON: {
          virtuals: true,
        },
    }
);

WorkoutSchema.virtual("totalDuration").get(function () {
    // Calculates the total duration of all included exercises for a given workout
    return this.exercises.reduce((total, exercise) => {
      return total + exercise.duration;
    }, 0);
  });


const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;