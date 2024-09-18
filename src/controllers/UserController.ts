// src/controllers/UserController.ts
import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { User } from '../models/UserModel';
import { UserService } from '../services/UserService';

const userService = new UserService();

export class UserController {
	findAllUsers = (request: Request, response: Response) => {
		response.status(200).send('Hello World!');
	};

	createUser = async (request: Request, response: Response) => {
		// Verificar erros de validação
		const errors = validationResult(request);
		if (!errors.isEmpty()) {
			return response.status(400).json({ errors: errors.array() });
		}

		try {
			const { name, email } = request.body;

			const user: User = { name, email };
			const result = await userService.createUser(user);
			return response.status(201).json(result);
		} catch (error) {
			console.error('Erro ao criar usuário:', error);
			return response
				.status(500)
				.json({ message: 'Erro interno do servidor' });
		}
	};
}
