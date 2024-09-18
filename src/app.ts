// 017-type-script-node-js\src\app.ts
import express from 'express';
import { AddressInfo } from 'net';
import userRoutes from './routes/UserRoutes';

const app = express();

app.use(express.json());

// Usar as rotas de usuário
app.use('/api/v1/users', userRoutes);

function startServer(port: number = 0) {
	const server = app.listen(port, () => {
		const address = server.address() as AddressInfo;
		console.log(`Server is running on http://localhost:${address.port}`);
	});
	return server;
}

if (process.env.START_SERVER === 'true') {
	startServer(3000); // Use a porta 3000 para execução normal
}

function closeServer(server: ReturnType<typeof startServer>) {
	return new Promise<void>((resolve) => {
		server.close(() => {
			resolve();
		});
	});
}

export { app, startServer, closeServer };
