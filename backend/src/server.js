import express from "express";
import { ENV_VAR } from "./config/env.js";
import { connectDB } from "./config/db.js";

//routes
import authRoutes from "./routes/auth.route.js";

const app = express();

app.get("/", (req, res) => {
  res.send({ message: "Server is running..." });
});
app.use("/api/v1/auth", authRoutes);

app.listen(ENV_VAR.PORT, () => {
  console.log("Server start on eport " + `http://localhost:${ENV_VAR.PORT}`);
  connectDB();
});
