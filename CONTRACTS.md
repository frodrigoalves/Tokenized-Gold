# Smart Contracts

`GoldToken` is an ERC20 token with owner mint and holder burn functions. Tests are written using Hardhat.

## Setup
```bash
cd contracts
npm install
npx hardhat test
```

To deploy:
```bash
npx hardhat run scripts/deploy.js --network <network>
```
