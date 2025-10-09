import express from "express";
import { ENV_VAR } from "./config/env.js";
import { clerkMiddleware } from "@clerk/express";
import { serve } from "inngest/express";
import { inngest, functions } from "./config/inngest.js";
import { connectDB } from "./config/db.js";

const app = express();

app.use(express.json());
app.use(clerkMiddleware()); // req.auth will be available in the request object

app.get("/", (req, res) => {
  res.send({ message: "Server is running..." });
});
app.use("/api/inngest", serve({ client: inngest, functions }));

const startServer = async () => {
  try {
    await connectDB();
    if (ENV_VAR.NODE_ENV !== "production") {
      app.listen(ENV_VAR.PORT, () =>
        console.log(
          "Server start on eport " + `http://localhost:${ENV_VAR.PORT}`
        )
      );
    }
  } catch (error) {
    console.log("server error", error);
    process.exit(1);
  }
};

startServer();
export default app;
