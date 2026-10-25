import express from "express";
import { addRoom } from "../../controllers/Room/add_room.js";

const router = express.Router();

router.post("/add_room", addRoom);

export default router;
