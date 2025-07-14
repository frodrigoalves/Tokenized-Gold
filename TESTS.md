# Testing Instructions

Run the following for each module. If your environment blocks network access,
pre‑download the required binaries and point the tools to their local paths as
described below.

## Contracts
```bash
cd contracts
npm install
npm test
```

## API
```bash
cd api
npm install
npm test
```

## Frontend
```bash
cd frontend
npm install
npm test
```

## Using Local Binaries

For environments without internet access you must provide MongoDB and
Solidity compiler binaries manually.

1. **MongoDB** – download a MongoDB binary compatible with your OS and set the
   environment variable `MONGOMS_DOWNLOAD_URL` to a `file://` URL pointing to the
   archive. The API tests will use this path when starting
   `mongodb-memory-server`.
2. **Solidity Compiler** – download the matching `solc` release and set
   `SOLC_BINARY` to its path. Hardhat will use this binary instead of fetching
   it automatically.

Export these variables in your shell before running `npm test` in the API or
contracts directories.
