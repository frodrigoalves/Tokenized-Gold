# Tokenized Gold

Minimal MVP for a gold-backed token platform. This repository contains a Node.js API, Solidity contracts and a Next.js frontend. Everything can run locally or with Docker Compose.

## Structure
- `contracts/` – Hardhat project with `GoldToken` ERC20
- `api/` – Express + MongoDB backend with JWT authentication
- `frontend/` – Next.js interface

## Quick Start with Docker

```bash
cp .env.example .env
docker-compose up --build
```

The API will be available on `http://localhost:3001` and the frontend on `http://localhost:3000`.

## Manual Setup

Each service can also run individually:

```bash
# Backend
cd api && npm install && npm start

# Frontend
cd ../frontend && npm install && npm run dev

# Contracts
cd ../contracts && npm install && npx hardhat test
```

## Running Tests

```
cd api && npm test
cd ../contracts && npm test
cd ../frontend && npm test
```

Environment variables for local development are documented in `.env.example` and in each service's `.env.example` file.

