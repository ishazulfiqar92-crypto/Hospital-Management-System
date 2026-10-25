import express from "express";
import { addReview } from "../../controllers/Review/add_review.js";

const router = express.Router();

router.post("/add_review", addReview);

export default router;
