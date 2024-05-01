import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../models/User.js";
import { Doctor } from "../models/Doctor.js";
import { errorHandler } from "../utils/error.js";

const router = express.Router();

// Middleware to parse JSON bodies
router.use(express.json());

router.post("/login", async (req, res, next) => {
  const { email, password } = req.body;
  let user = await User.findOne({ email });
  let userType = 'user';

  // Check if email corresponds to a user
  if (!user) {
    user = await Doctor.findOne({ email });
    if (!user) {
      return next(errorHandler(404, 'User not found'));
    }
    userType = 'doctor';
  }

  // Check password
  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) {
    return next(errorHandler(400, 'Invalid Password'));
  }

  // Generate JWT token
  const token = jwt.sign({ id: user._id, userType }, process.env.KEY);

  // Send token in response
  res.cookie("token", token, { httpOnly: true });

  // Send user type and any necessary user information in the response
  res.json({ status: true, userType, user });
});

export { router as LoginRouter };
