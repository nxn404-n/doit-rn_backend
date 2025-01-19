// External imports
import express from 'express';

// Internal imports
import { createUser, deleteUser } from '../Controllers/userController';

const router = express.Router();

// Create a new user
router.post("/", createUser);

// Delete an user
router.delete("/:id", deleteUser);
