// UserService.ts
import { Database } from '../database/Database';
import { User } from '../models/UserModel';

export class UserService {
	createUser = async (
		user: User
	): Promise<{ message: string; user: User }> => {
		// Usando o método estático do Database para adicionar o usuário
		Database.addUser(user);

		// Obtém a lista atualizada de usuários (opcional, dependendo da sua necessidade)
		const updatedUserList = Database.getAllUsers();

		return {
			message: 'User created',
			user: user,
		};
	};

	// Você pode adicionar mais métodos aqui conforme necessário
	// Por exemplo:
	getAllUsers = async (): Promise<User[]> => {
		return Database.getAllUsers();
	};

	// getUserById = async (id: number): Promise<User | undefined> => {
	//     return Database.getUserById(id);
	// };
}
