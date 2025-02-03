// External imports
import express from 'express';

// Internal imports
import { createUser, deleteUser, login, logout } from '../Controllers/userController.js';
import authenticate from '../MIddlewares/authenticate.js';

const router = express.Router();


// Signup
router.post("/signup", createUser);

// Login
router.post("/login", login);

// Logout
router.post("/logout/:id", logout);

// Delete user
router.delete("/:id", authenticate, deleteUser);

export default router;