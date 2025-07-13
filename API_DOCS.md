# API Documentation

Base URL: `http://localhost:3001`

## Auth
- `POST /register` – create account `{ email, password }`
- `POST /login` – returns `{ token }`

All private endpoints expect `Authorization: Bearer <token>`.

## Endpoints
- `POST /kyc` – mark user as verified (mock)
- `POST /deposit` – `{ amount }` increase USD balance
- `POST /withdraw` – `{ amount }` decrease USD balance if available
- `GET /status` – health check
