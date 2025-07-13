# Tokenized Gold

Minimal MVP for a gold-backed token platform. This repository includes a backend API, smart contracts and a Next.js frontend. It can run locally with Docker Compose.

## Structure
- `contracts/` – Solidity contracts using Hardhat
- `api/` – Express + MongoDB backend with JWT auth
- `frontend/` – Next.js UI

## Quick Start

```bash
cp .env.example .env
docker-compose up --build
```

The API is served on `http://localhost:3001` and the frontend on `http://localhost:3000`.

See each subdirectory README for individual commands.
