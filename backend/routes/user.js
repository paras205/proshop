import express from "express";
import {
  authUser,
  getProfile,
  registerUser,
  updateProfile
} from "../controllers/user.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

router.post("/login", authUser);
router.route("/").post(registerUser);
router.route("/profile").get(protect, getProfile).put(protect, updateProfile);

export default router;
