// External imports
import express from 'express';

// Internal imports
import authenticate from '../MIddlewares/authenticate.js';
import { checkAuth } from '../Controllers/authController.js';

const router = express.Router();

// Route to check if user is authenticated
router.get("/", authenticate, checkAuth);

export default router;