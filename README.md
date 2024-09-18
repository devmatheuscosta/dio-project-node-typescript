# DIO Project Node TypeScript

## Descrição

Este projeto é uma aplicação Node.js desenvolvida com TypeScript, implementando uma API RESTful com arquitetura MVC. O projeto faz parte de um desafio da Digital Innovation One (DIO) e serve como exemplo de boas práticas de desenvolvimento em Node.js e TypeScript.

## Características

- Framework web: Express.js
- Linguagem: TypeScript
- Arquitetura: MVC (Model-View-Controller)
- Testes: Jest
- Validação: express-validator
- Banco de Dados: Simulação em memória

## Pré-requisitos

- Node.js (versão 14 ou superior)
- npm (normalmente vem com Node.js)

## Instalação

1. Clone o repositório:

```bash
git clone https://github.com/devmatheuscosta/dio-project-node-typescript.git
```

2. Entre no diretório do projeto:

```bash
cd dio-project-node-typescript
```

3. Instale as dependências:

```bash
npm install
```

## Configuração

1. Copie o arquivo `.env.example` para `.env`:

```bash
cp .env.example .env
```

2. Edite o arquivo `.env` e configure as variáveis de ambiente necessárias.

## Executando o Projeto

Para iniciar o servidor em modo de desenvolvimento:

```bash
npm run start:dev
```

Para compilar e iniciar em modo de produção:

```bash
npm run build
```

## Testes

Para executar os testes:

```bash
npm run test
```

## Estrutura do Projeto

```bash
dio-project-node-typescript/
├── src/
│ ├── controllers/
│ │ └── UserController.ts
│ ├── models/
│ │ └── UserModel.ts
│ ├── routes/
│ │ └── UserRoutes.ts
│ ├── services/
│ │ └── UserService.ts
│ ├── middlewares/
│ │ └── UserValidations.ts
│ ├── database/
│ │ └── Database.ts
│ ├── utils/
│ └── app.ts
├── tests/
├── .env.example
├── .gitignore
├── jest.config.ts
├── package.json
├── README.md
├── tsconfig.json
└── LICENSE
```

## API Endpoints

- `GET /api/v1/users`: Lista todos os usuários
- `POST /api/v1/users`: Cria um novo usuário

## Contribuindo

Contribuições são sempre bem-vindas! Por favor, leia o guia de contribuição para saber como contribuir corretamente para este projeto.

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

## Contato

Matheus Costa - [matheuscostadeveloper@gmail.com
](mailto:matheuscostadeveloper@gmail.com)
