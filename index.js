// External imports
import express from 'express';
import dotenv from "dotenv";
import mongoose from 'mongoose';
import cors from 'cors';

// Internal imports
import userRouter from './Routes/userRoute.js';
import todoRouter from './Routes/todoRoute.js';

const app = express();
dotenv.config();
app.use(cors());
const PORT = process.env.PORT;

mongoose.connect(process.env.MONGO_CONNECTION_STRING)
  .then(console.log("Connected to MongoDB successfully!!"))
  .catch((err) => { console.log(err) })

// Middleware to parse JSON requests
app.use(express.json());

// Routers
app.use('/api/user', userRouter);
app.use('/api/todo', todoRouter);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});