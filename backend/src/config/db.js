import mongoose from "mongoose";
import { ENV_VAR } from "../config/env.js";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(ENV_VAR.MONGO_URI);
    console.log("MongoDB connected", conn.connection.host);
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1); // Exit process with failure 0 means success
  }
};
