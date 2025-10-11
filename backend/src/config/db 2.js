import mongoose from "mongoose";
import { ENV_VAR } from "./env.js";

export const connectDB = async () => {
  try {
    await mongoose.connect(ENV_VAR.MONGO_URI);
    console.log("db connected");
  } catch (error) {
    console.log("db connection error", error);
  }
};
