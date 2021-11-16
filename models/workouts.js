const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: Date.now
    },
    exercises: [
      {
        type: {
          type: String,
          trim: true,
          required: "What kind of exercise would you like to add?"
        },
        name: {
          type: String,
          trim: true,
          required: "What is the name of the exercise?"
        },
        duration: {
          type: Number,
          required: "How long would you like to engage in this exercise for?"
        },
        weight: {
          type: Number
        },
        reps: {
          type: Number
        },
        sets: {
          type: Number
        },
        distance: {
          type: Number
        }
      }
    ]
  }
);

const Workout = mongoose.model("workout", workoutSchema)

module.exports = Workout;