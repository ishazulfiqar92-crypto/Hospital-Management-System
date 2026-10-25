import express from "express";
import cors from "cors";
import dotenv from "dotenv";

// Sab se pehle .env load karo
dotenv.config();

import connectDB from "./config/db.js";
import authRoute from "./routes/authRoutes.js";
import appointmentRoute from "./routes/Appointment/Appointment.js";
import billingRoute from "./routes/Billing/Billing.js";
import departmentRoute from "./routes/Department/Department.js";
import doctorRoute from "./routes/Doctor/Doctor.js";
import medicalrecordRoute from "./routes/MedicalRecord/MedicalRecord.js";
import medicineRoute from "./routes/Medicine/Medicine.js";
import patientRoute from "./routes/Patient/Patient.js";
import prescriptionRoute from "./routes/Prescription/Prescription.js";
import reviewRoute from "./routes/Review/Review.js";
import roomRoute from "./routes/Room/Room.js";
import userRoute from "./routes/User/User.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("Hospital Management API is running"));

app.use("/api/auth", authRoute);
app.use("/api/appointment", appointmentRoute);
app.use("/api/billing", billingRoute);
app.use("/api/department", departmentRoute);
app.use("/api/doctor", doctorRoute);
app.use("/api/medicalrecord", medicalrecordRoute);
app.use("/api/medicine", medicineRoute);
app.use("/api/patient", patientRoute);
app.use("/api/prescription", prescriptionRoute);
app.use("/api/review", reviewRoute);
app.use("/api/room", roomRoute);
app.use("/api/user", userRoute);

connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("server is running on port " + PORT);
});
