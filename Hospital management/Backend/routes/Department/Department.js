import express from "express";
import { addDepartment } from "../../controllers/Department/add_department.js";

const router = express.Router();

router.post("/add_department", addDepartment);

export default router;
