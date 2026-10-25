import express from "express";
import { addPrescription } from "../../controllers/Prescription/add_prescription.js";

const router = express.Router();

router.post("/add_prescription", addPrescription);

export default router;
