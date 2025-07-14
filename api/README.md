# Tokenized Gold – Backend API

This Express service connects to MongoDB and provides user registration, login, basic KYC verification, and mock fiat on/off ramp endpoints. Environment variables are loaded from `.env`.

## Commands

```bash
npm install
npm start   # start server
npm test    # run Jest tests
```

The API expects these variables:
- `PORT` – HTTP port (default 3001)
- `MONGODB_URI` – MongoDB connection string
- `JWT_SECRET` – secret for signing tokens

### Offline Testing

To run tests without internet access, set `MONGOMS_DOWNLOAD_URL` to a `file://`
path pointing to a local MongoDB archive so that `mongodb-memory-server` uses
your pre-downloaded binary.
