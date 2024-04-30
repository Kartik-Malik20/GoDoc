import express from "express";
import bcrypt from "bcrypt";
import { User } from "../models/User.js";
import jwt from "jsonwebtoken";

const router = express.Router()

router.post('/reset-password/:token', async(req,res) =>{
    const token = req.params.token;
    const {password} = req.body;
    try {
        const decoded = jwt.verify(token, process.env.KEY)
        const id = decoded.id
        const hashPass = await bcrypt.hash(password, 10)
        await User.findByIdAndUpdate({_id:id},{password:hashPass})
        return res.json({status:true, message:"Password Updated"})
    } catch (error) {
        return res.json('Invalid Token')
    }
})

export {router as ResetPassRouter}