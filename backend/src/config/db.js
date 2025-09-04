import mongoose from "mongoose";

import { ENV } from "./env.js";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(ENV.MONGO_URI);
    console.log("MongoDB connected Successfully :", conn.connection.host);
  } catch (error) {
    console.log("Error connecting to MongoDb", error);
    process.exit(1);
  }
};
