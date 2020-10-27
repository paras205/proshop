import express from "express";
import { createOrder } from "../controllers/order.js";
import { protect } from "../middleware/auth.js";
const router = express.Router();

router.route("/").post(protect, createOrder);

export default router;
