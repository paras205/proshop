import express from "express";
import {
  authUser,
  getProfile,
  registerUser,
  updateProfile,
  getAllUsers,
  deleteUser
} from "../controllers/user.js";
import { protect, isAdmin } from "../middleware/auth.js";

const router = express.Router();

router.route("/").post(registerUser).get(protect, isAdmin, getAllUsers);
router.post("/login", authUser);
router.route("/profile").get(protect, getProfile).put(protect, updateProfile);
router.route("/:id").delete(protect, isAdmin, deleteUser);

export default router;
