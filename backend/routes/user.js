import express from "express";
import { authUser, getProfile, registerUser } from "../controllers/user.js";
import { protect } from "../middleware/auth.js";
const router = express.Router();

router.get("/login", authUser);
router.route("/").post(registerUser);
router.route("/profile").get(protect, getProfile);

export default router;
