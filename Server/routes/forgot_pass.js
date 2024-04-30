import express from "express";
import { User } from "../models/User.js";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";

const router = express.Router();

router.post("/forgot-password", async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ message: "User not found!" });
    }

    const token = jwt.sign({ id: user._id }, process.env.KEY);
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAILUSER,
        pass: process.env.PASSUSER,
      },
    });

    var mailOptions = {
      from: process.env.MAILUSER,
      to: email,
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
