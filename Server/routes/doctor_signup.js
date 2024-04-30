import express from "express";
import { Doctor } from "../models/Doctor.js";
import bcrypt from 'bcrypt'

const router = express.Router();
router.use(express.json());

router.post("/docsignup", async (req, res) => {
  const {
    name,
    email,
    password,
    phoneNumber,
    clinicName,
    clinicAddress,
    city,
    state,
    zipCode,
  } = req.body;

  const doctor = await Doctor.findOne({email})
  if(doctor){
    return res.json({message:"Doctor email already exits in DataBase"})
  }

  const hashpassword = await bcrypt.hash(password, 10)
  const newDoctor = new Doctor({
    name,
    email,
    password : hashpassword,
    phoneNumber,
    clinicName,
    clinicAddress,
    city,
    state,
    zipCode,
  })

  await newDoctor.save();
  return res.json({ status: true, message: "Doctor has been registered" });
});

export { router as DocSignup };
