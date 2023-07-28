import express from "express";

import { login, signup } from "../controllers/auth.js";
import {
  follow,
  getAllUsers,

  unfollow,
  updateProfile,
 
} from "../controllers/users.js";
import { mobileGet, otpVerify } from "../controllers/verify.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);

router.get("/getAllUsers", getAllUsers);
router.patch("/update/:id", auth, updateProfile);

router.post("/otpsend", mobileGet);
router.post("/verify", otpVerify);

router.post("/follow", auth, follow);
router.post("/unfollow", auth, unfollow);
///otp chatbot//
router.post("/otpsend", mobileGet);
router.post("/verify", otpVerify);

export default router;
