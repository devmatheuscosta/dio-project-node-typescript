// UserService.test.ts
import { UserService } from './UserService';
import { Database } from '../database/Database';
import { User } from '../models/UserModel';

// Mock the Database methods
jest.mock('../database/Database', () => {
	return {
		Database: {
			addUser: jest.fn(),
			getAllUsers: jest.fn(() => []),
		},
	};
});

describe('UserService', () => {
	let userService: UserService;

	beforeEach(() => {
		userService = new UserService();
		jest.clearAllMocks();
	});

	it('should create a user and return a success message', async () => {
		const user: User = {
			id: 1,
			name: 'John Doe',
			email: 'johndoe@example.com',
		};

		// Call the createUser method
		const result = await userService.createUser(user);

		// Check if Database.addUser was called with the correct user
		expect(Database.addUser).toHaveBeenCalledWith(user);

		// Check if the result is as expected
		expect(result).toEqual({
			message: 'User created',
			user: user,
		});
	});

	it('deve retornar todos os usuários', async () => {
		const result = await userService.getAllUsers();
		expect(result).toEqual([]);
	});
});
