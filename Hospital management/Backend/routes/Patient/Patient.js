import express from "express";
import { addPatient } from "../../controllers/Patient/add_patient.js";

const router = express.Router();

router.post("/add_patient", addPatient);

export default router;
