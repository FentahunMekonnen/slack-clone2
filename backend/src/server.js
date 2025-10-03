import express from "express";
import { ENV_VAR } from "./config/env.js";

const app = express();

app.get("/", (req, res) => {
  res.send({ message: "Server is running..." });
});

app.listen(ENV_VAR.PORT, () =>
  console.log("Server start on eport " + `http://localhost:${ENV_VAR.PORT}`)
);
