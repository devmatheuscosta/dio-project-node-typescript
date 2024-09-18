// src/__tests__/app.test.ts
import request from 'supertest';
import { app, startServer, closeServer } from './app';

describe('API Tests', () => {
	let server: ReturnType<typeof startServer>;

	beforeAll(() => {
		server = startServer(0); // Use uma porta aleatória para testes
	});

	afterAll(async () => {
		await closeServer(server);
	});

	describe('User Routes', () => {
		const baseUrl = '/api/v1/users';

		it('should create a new user', async () => {
			const response = await request(app)
				.post(baseUrl)
				.send({ name: 'John Doe', email: 'john@example.com' });

			expect(response.status).toBe(201);
			expect(response.body).toHaveProperty('message', 'User created');
			expect(response.body).toHaveProperty('user');
			expect(response.body.user).toHaveProperty('name', 'John Doe');
			expect(response.body.user).toHaveProperty(
				'email',
				'john@example.com'
			);
		});

		it('should return 400 for invalid user data', async () => {
			const response = await request(app)
				.post(baseUrl)
				.send({ name: '', email: 'invalid-email' });

			expect(response.status).toBe(400);
			expect(response.body).toHaveProperty('errors');
			expect(response.body.errors).toBeInstanceOf(Array);
		});

		it('should get all users', async () => {
			const response = await request(app).get(baseUrl);

			expect(response.status).toBe(200);
			// Ajuste esta expectativa de acordo com a implementação real do seu método findAllUsers
			expect(response.text).toBe('Hello World!');
		});
	});
});
