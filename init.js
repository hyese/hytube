import "./db";
import app from "./app";
import dotenv from "dotenv";
dotenv.config();
import "./models/Video";
import "./models/Comment";

// Port Number
const PORT = process.env.PORT || 4000;

// Server Start
const handleListening = () =>
  console.log(`😋 Listening on: http://localhost:${PORT}`);

app.listen(PORT, handleListening);
