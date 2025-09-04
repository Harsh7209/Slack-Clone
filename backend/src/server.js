import express from "express";
import { ENV } from "./config/env.js";
import {connectDB} from "./config/db.js" 

const app = express();

app.get("/", (req, res) => {
  res.send("hello World");
});



app.listen(ENV.PORT, () => {
  console.log("server is started on port:" , ENV.PORT);
  connectDB();
});


