import mongoose from "mongoose";

// Patient apne doctor ko review deta hai
const reviewSchema = new mongoose.Schema(
  {
    patient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patient",
      required: true
    },

    doctor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Doctor",
      required: true
    },

    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5
    },

    comment: {
      type: String,
      trim: true
    }
  },
  {
    timestamps: true
  }
);

const Review = mongoose.model("Review", reviewSchema);

export default Review;
