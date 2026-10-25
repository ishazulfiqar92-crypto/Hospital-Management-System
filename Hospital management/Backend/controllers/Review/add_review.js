import Review from "../../models/ReviewModel.js";

export const addReview = async (req, res) => {
  try {
    let patient = req.body.patient;
    let doctor = req.body.doctor;
    let rating = req.body.rating;
    let comment = req.body.comment;

    let review_created = await Review.create({
      patient : patient,
      doctor : doctor,
      rating : rating,
      comment : comment,
    });

    res.status(201).json({
      message : "Review Created Successfully",
      data : review_created
    });
  } catch (error) {
    console.log(error.message);

    res.status(400).json({
      message : "Something Went Wrong",
      error : error.message
    });
  }
};
