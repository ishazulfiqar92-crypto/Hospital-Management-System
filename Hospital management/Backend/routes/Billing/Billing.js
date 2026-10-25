import express from "express";
import { addBilling } from "../../controllers/Billing/add_billing.js";

const router = express.Router();

router.post("/add_billing", addBilling);

export default router;
