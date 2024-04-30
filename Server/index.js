// server.js

import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { UserSignupRouter } from "./routes/user_signup.js";
import { UserLoginRouter } from "./routes/user_login.js";
import cors from "cors";
import { ForgotPassRouter } from "./routes/forgot_pass.js";
import { ResetPassRouter } from "./routes/reset_pass.js";
import { DocSignup } from "./routes/doctor_signup.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors({
    origin: ["http://localhost:5173"],
    credentials: true,
}));
app.use(express.json());

// Routes
app.use("/auth", UserSignupRouter);
app.use("/auth", DocSignup);
app.use("/auth", UserLoginRouter);
app.use("/auth", ForgotPassRouter);
app.use("/auth", ResetPassRouter);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// MongoDB connection
mongoose
  .connect(process.env.MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server is running on ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
  });

// Test route
app.get("/", function (req, res) {
  res.send("Hello World");
});
