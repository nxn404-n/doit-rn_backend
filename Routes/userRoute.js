// External imports
import express from 'express';

// Internal imports
import { createUser, deleteUser, login } from '../Controllers/userController.js';

const router = express.Router();

// Signup
router.post("/signup", createUser);

// Delete an user
router.delete("/:id", deleteUser);

// Login
router.post("/login", login);

export default router;