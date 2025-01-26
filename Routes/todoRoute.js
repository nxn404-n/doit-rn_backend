// External imports
import express from 'express';

// Internal imports
import { getAllTodo, createTodo, updateTodo, deleteTodo } from '../Controllers/todoController.js';

const router = express.Router();

// Get all todo
router.get("/", getAllTodo);

// Create todo
router.post("/", createTodo);

// Update todo
router.put("/:id", updateTodo);

// Delete todo
router.delete("/:id", deleteTodo);

export default router;