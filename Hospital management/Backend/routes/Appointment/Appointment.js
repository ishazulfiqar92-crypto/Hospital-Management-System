import express from "express";
import { addAppointment } from "../../controllers/Appointment/add_appointment.js";

const router = express.Router();

router.post("/add_appointment", addAppointment);

export default router;
