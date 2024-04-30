import express from "express";
import bcrypt from "bcrypt";
import { User } from "../models/User.js";
import jwt from "jsonwebtoken";
import { Doctor } from "../models/Doctor.js";

const router = express.Router();

router.post('/reset-password/:token', async (req, res) => {
    const token = req.params.token;
    const { password } = req.body;

    try {
        // Verify the token and extract the ID
        const decoded = jwt.verify(token, process.env.KEY);
        const id = decoded.id;

        // Check if the ID corresponds to a User or a Doctor
        const user = await User.findById(id);
        const doctor = await Doctor.findById(id);

        if (user) {
            // Update the user's password
            const hashPass = await bcrypt.hash(password, 10);
            await User.findByIdAndUpdate(id, { password: hashPass });
        } else if (doctor) {
            // Update the doctor's password
            const hashPass = await bcrypt.hash(password, 10);
            await Doctor.findByIdAndUpdate(id, { password: hashPass });
        } else {
            // If neither User nor Doctor is found, return an error
            return res.status(404).json({ message: "User or Doctor not found" });
        }

        return res.json({ status: true, message: "Password updated successfully" });
    } catch (error) {
        // Handle invalid token or other errors
        console.error(error);
        return res.status(400).json({ message: "Invalid token or internal server error" });
    }
});

export { router as ResetPassRouter };
