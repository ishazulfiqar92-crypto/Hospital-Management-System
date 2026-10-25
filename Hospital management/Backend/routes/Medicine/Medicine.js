import express from "express";
import { addMedicine } from "../../controllers/Medicine/add_medicine.js";

const router = express.Router();

router.post("/add_medicine", addMedicine);

export default router;
