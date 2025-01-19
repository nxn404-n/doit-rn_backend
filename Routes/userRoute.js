// External imports
import express from 'express';

// Internal imports
import User from "../Models/userSchema";
import { createUser } from '../Controllers/userController';

const router = express.Router();

// Create a new user
router.post("/user", createUser);

// Update an user
router.patch("/user", async (req, res) => {
  try {
    
  } catch (error) {
    
  }
});

// Delete an user
router.delete("/user", async (req, res) => {
  try {
    
  } catch (error) {
    
  }
});
