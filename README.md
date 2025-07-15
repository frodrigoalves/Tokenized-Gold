# Tokenized Gold
AI-Powered Tokenized Gold Platform MVP

## Structure
- contracts/: Solidity smart contracts (ERC20, staking)
- api/: Node.js backend, KYC, trading endpoints
- frontend/: Next.js frontend, trading/staking UI

## Development

Install dependencies for each service:

```bash
cd api && npm install
cd ../contracts && npm install # if package.json exists
cd ../frontend && npm install
```

Run the API and frontend in separate terminals:

```bash
cd api && npm start
```

```bash
cd frontend && npm run dev
```

## Testing

Run backend tests from the `api` directory:

```bash
cd api && npm test
```

Alternatively, build and run everything using Docker Compose from the repository root:

```bash
docker-compose up --build
```

## Authors
- CEO: Sheikh Farhad
- Engineering MVP: Rodrigo Alves
