// src/models/UserModel.test.ts
import { User } from './UserModel';

describe('User Model', () => {
	it('should create a user with name and email', () => {
		const user: User = {
			name: 'John Doe',
			email: 'johndoe@example.com',
		};

		expect(user.name).toBe('John Doe');
		expect(user.email).toBe('johndoe@example.com');
		expect(user.id).toBeUndefined();
	});

	it('should allow optional id', () => {
		const userWithId: User = {
			id: 1,
			name: 'Jane Doe',
			email: 'janedoe@example.com',
		};

		expect(userWithId.id).toBe(1);
		expect(userWithId.name).toBe('Jane Doe');
		expect(userWithId.email).toBe('janedoe@example.com');
	});
});
