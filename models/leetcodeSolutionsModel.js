const mongoose = require("mongoose");
const slugify = require("slugify");
// const User = require('./userModel');
// const validator = require('validator');

const leetCodeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "A question must have a title"],
      trim: true,
    },
    questionID: {
      type: Number,
      required: [true, "A Question must have question id"],
    },
    difficulty: {
      type: String,
      required: [true, "A question must have a difficulty"],
      enum: {
        values: ["easy", "medium", "difficult"],
        message: "Difficulty is either: easy, medium, difficult",
      },
    },
    summary: {
      type: String,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
      required: [true, "A Question must have a description"],
    },
    solutions: {
      type: String,
      required: [true, "A Question must have solution"],
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      select: false,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

leetCodeSchema.index({ questionID: 1 });

const leetCode = mongoose.model("leetcode", leetCodeSchema);

module.exports = leetCode;
