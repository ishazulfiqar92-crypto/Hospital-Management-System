import express from "express";
import { addUser } from "../../controllers/User/add_user.js";

const router = express.Router();

router.post("/add_user", addUser);

export default router;
