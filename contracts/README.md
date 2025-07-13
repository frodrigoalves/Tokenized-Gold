# Tokenized Gold – Contracts

Solidity contracts are managed with Hardhat. `GoldToken` is an ERC20 with owner mint/burn capabilities.

## Commands

```bash
npm install
npm test           # run Hardhat tests
npx hardhat run scripts/deploy.js --network <network>
```

Deployment uses the script in `scripts/deploy.js`.

### Offline Testing

Hardhat downloads the Solidity compiler on first run. To avoid this, supply a
local binary via the `SOLC_BINARY` environment variable before running tests.
