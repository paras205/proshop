import express from "express";
import {
  createOrder,
  getOrderById,
  updateOrderToPaid
} from "../controllers/order.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

router.route("/").post(protect, createOrder);
router.route("/:id").get(protect, getOrderById);
router.route("/:id/pay").put(protect, updateOrderToPaid);

export default router;
