// External imports
import express from 'express';
import dotenv from "dotenv";
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';

// Internal imports
import userRouter from './Routes/userRoute.js';
import todoRouter from './Routes/todoRoute.js';

const allowedOrigins = ["http://localhost:5173", "https://doit-rn.netlify.app"]

const app = express();
dotenv.config();
app.use(cookieParser());
app.use(cors({
  origin: allowedOrigins,
  credentials: true
}));
const PORT = process.env.PORT;

mongoose.connect(process.env.MONGO_CONNECTION_STRING)
  .then(console.log("Connected to MongoDB successfully!!"))
  .catch((err) => console.error("MongoDB Connection Error:", err));

// Middleware to parse JSON requests
app.use(express.json());

// Routers
app.use('/api/user', userRouter);
app.use('/api/todo', todoRouter);

app.listen(PORT, () => {
  if (process.env.NODE_ENV !== "production") {
    console.log(`Server is running at http://localhost:${PORT}`);
  }
});