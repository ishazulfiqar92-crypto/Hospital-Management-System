import express from "express";
import { addDoctor } from "../../controllers/Doctor/add_doctor.js";

const router = express.Router();

router.post("/add_doctor", addDoctor);

export default router;
