# Hermes

> RESTful API backend built with Express and TypeScript to power interactive narrative experiences.

## 📖 About

Hermes is a robust backend service that provides the API infrastructure for the Epitre application. Built with Express.js and TypeScript, it delivers a scalable and maintainable foundation for managing narrative cards, user data, and application services.

## ✨ Features

- **RESTful API**: Clean and intuitive API endpoints
- **Type-Safe**: Built entirely with TypeScript for enhanced code quality
- **CORS Support**: Configured cross-origin resource sharing
- **Error Handling**: Centralized error handling middleware
- **Environment Configuration**: Flexible configuration using environment variables
- **Development Ready**: Hot-reload with nodemon for rapid development
- **Production Optimized**: Built and optimized for production deployment

## 🛠️ Tech Stack

- **Runtime**: [Node.js](https://nodejs.org/)
- **Framework**: [Express.js](https://expressjs.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Code Quality**: ESLint + Prettier
- **Development**: Nodemon + ts-node

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone https://github.com/Missive-Project/hermes
cd hermes
```

2. Install dependencies

```bash
npm install
```

3. Configure environment variables

```bash
cp .env.example .env
```

Edit `.env` with your configuration.

4. Start the development server

```bash
npm run dev
```

5. The API will be available at `http://localhost:3000`

## 📜 Available Scripts

- `npm run dev` - Start development server with hot-reload
- `npm run build` - Compile TypeScript to JavaScript
- `npm start` - Start production server (requires build)
- `npm run start:prod` - Build and start production server
- `npm run lint` - Lint code
- `npm run lint:fix` - Lint and auto-fix issues
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## 📁 Project Structure

```
hermes/
├── src/
│   ├── config/          # Configuration files
│   ├── controllers/     # Request handlers
│   ├── middlewares/     # Express middlewares
│   ├── routes/          # API route definitions
│   ├── services/        # Business logic layer
│   └── server.ts        # Application entry point
├── .env.example         # Environment variables template
├── tsconfig.json        # TypeScript configuration
├── eslint.config.mjs    # ESLint configuration
└── package.json         # Dependencies and scripts
```

## 🔌 API Endpoints

### Health Check

- `GET /api/health` - Check API health status

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 🔗 Links

- [Frontend Repository](https://github.com/Missive-Project/epitre)
- [Report Bug](https://github.com/Missive-Project/hermes/issues)
- [Request Feature](https://github.com/Missive-Project/hermes/issues)

---

Made with ❤️ using Express.js and TypeScript
