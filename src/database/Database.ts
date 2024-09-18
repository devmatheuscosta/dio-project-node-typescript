// Database.ts
import { User } from '../models/UserModel';

export class Database {
	private static userData: User[] = [
		{ id: 1, name: 'John Doe', email: 'john@example.com' },
		{ id: 2, name: 'Jane Doe', email: 'jane@example.com' },
	];

	static addUser(user: User): void {
		this.userData.push(user);
	}

	static getAllUsers(): User[] {
		return this.userData;
	}

	// Você pode adicionar mais métodos conforme necessário, como:
	// static getUserById(id: number): User | undefined { ... }
	// static updateUser(id: number, updated
}
