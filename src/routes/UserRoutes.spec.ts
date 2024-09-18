// src/routes/userRoutes.test.ts
import request from 'supertest';
import express from 'express';
import userRoutes from './UserRoutes';

// Mock do UserController
jest.mock('../controllers/UserController', () => {
	return {
		UserController: jest.fn().mockImplementation(() => {
			return {
				findAllUsers: jest.fn((req, res) => res.status(200).json([])),
				createUser: jest.fn((req, res) =>
					res.status(201).json({ message: 'User created' })
				),
			};
		}),
	};
});

const app = express();
app.use(express.json());
app.use('/users', userRoutes);

describe('User Routes', () => {
	it('GET /users should return an empty array', async () => {
		const response = await request(app).get('/users');
		expect(response.status).toBe(200);
		expect(response.body).toEqual([]);
	});

	it('POST /users should create a user and return a success message', async () => {
		const newUser = { name: 'John Doe', email: 'johndoe@example.com' };
		const response = await request(app).post('/users').send(newUser);

		expect(response.status).toBe(201);
		expect(response.body).toEqual({ message: 'User created' });
	});
});
