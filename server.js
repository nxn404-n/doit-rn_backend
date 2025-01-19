// External imports
import express from 'express';
import dotenv from "dotenv";
import mongoose from 'mongoose';

const app = express();
dotenv.config();
const PORT = process.env.PORT;

mongoose.connect(process.env.MONGO_CONNECTION_STRING)
  .then(console.log("Connected to MongoDB successfully!!"))
  .catch((err) => {console.log(err)})

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});