import express from 'express';
import bcrypt from 'bcrypt';
import {User} from '../models/User.js'

const router = express.Router();


// Middleware to parse JSON bodies
router.use(express.json());

router.post("/signup", async (req, res) => {
    const { firstname,lastname, email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res.json({ message: "User already exists" });
    }
    const hashpassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      firstname,
      lastname,
      email,
      password: hashpassword,
    });
  
    await newUser.save();
    return res.json({ status: true, message: "User has been registered" });
  });

export {router as UserSignupRouter}