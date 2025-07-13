const hre = require('hardhat');

async function main() {
  const GoldToken = await hre.ethers.getContractFactory('GoldToken');
  const token = await GoldToken.deploy(hre.ethers.parseUnits('1000000', 18));
  await token.waitForDeployment();
  console.log('GoldToken deployed to:', await token.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
