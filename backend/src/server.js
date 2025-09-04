import express from "express";
import { ENV } from "./config/env.js";

const app = express();

app.get("/", (req, res) => {
  res.send("hello World");
});

console.log("Mongo_uri", ENV.MONGO_URI);

app.listen(ENV.PORT, () => {
  console.log("server is started on port:" , ENV.PORT);
});
