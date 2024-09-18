// src/routes/userRoutes.ts
import express from 'express';
import { UserController } from '../controllers/UserController';
import { createUserValidation } from '../middlewares/UserValidations';

const router = express.Router();
const userController = new UserController();

router.get('/', userController.findAllUsers);
router.post('/', createUserValidation, userController.createUser);

export default router;
