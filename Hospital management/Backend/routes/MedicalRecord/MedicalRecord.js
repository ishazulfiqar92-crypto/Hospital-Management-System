import express from "express";
import { addMedicalRecord } from "../../controllers/MedicalRecord/add_medicalrecord.js";

const router = express.Router();

router.post("/add_medicalrecord", addMedicalRecord);

export default router;
