import express from "express";
import { User } from "../models/User.js";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";
import { Doctor } from "../models/Doctor.js";

const router = express.Router();

router.post("/forgot-password", async (req, res) => {
  const { email } = req.body;
  try {
    let token;
    let recipientEmail = email;
    
    const user = await User.findOne({ email });
    if (!user) {
      const doctor = await Doctor.findOne({ email });
      if (!doctor) {
        return res.json({ message: "User not found" });
      }
      token = jwt.sign({ id: doctor._id }, process.env.KEY);
    } else {
      token = jwt.sign({ id: user._id }, process.env.KEY);
    }

    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAILUSER,
        pass: process.env.PASSUSER,
      },
    });

    var mailOptions = {
      from: process.env.MAILUSER,
      to: recipientEmail,
      subject: "Reset password",
      text: `http://localhost:5173/resetPassword/${token}`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
        return res.json({ message: "Error sending email" });
      } else {
        console.log("Email sent: " + info.response);
        return res.json({ status: true, message: "Email sent successfully" });
      }
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal server error" });
  }
});


export { router as ForgotPassRouter };
