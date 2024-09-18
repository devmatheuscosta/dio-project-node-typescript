// src/middlewares/UserValidations.ts
import { body, ValidationChain } from 'express-validator';

export const createUserValidation: ValidationChain[] = [
	body('name')
		.notEmpty()
		.withMessage('Nome é obrigatório')
		.isString()
		.withMessage('Nome deve ser uma string')
		.isLength({ min: 2 })
		.withMessage('Nome deve ter pelo menos 2 caracteres'),

	body('email')
		.notEmpty()
		.withMessage('Email é obrigatório')
		.isEmail()
		.withMessage('Email inválido'),
];
