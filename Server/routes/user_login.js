// routes/user_login.js

import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User } from '../models/User.js';

const router = express.Router();

// Middleware to parse JSON bodies
router.use(express.json());

router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ message: "User not found" });
    }
  
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.json({ message: "Password is incorrect" });
    }
  
    const token = jwt.sign({ firstname: user.firstname }, process.env.KEY);
    res.cookie("token", token, { httpOnly: true });
    return res.json({ status: true, message: "Login Successful" });
  });

export { router as UserLoginRouter };
