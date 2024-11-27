import express from 'express';
import { createUser, getUserById, getAllUsers } from '../controllers/userController.js';

const router = express.Router();

// Define routes that call controller functions
router.post('/', createUser);         // POST request to create a new user
router.get('/', getAllUsers);         // GET request to fetch all users
router.get('/:userId', getUserById); // GET request to fetch a user by ID

export default router;
