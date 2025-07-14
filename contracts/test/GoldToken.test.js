const { expect } = require('chai');
const { ethers } = require('hardhat');

describe('GoldToken', function () {
  it('mints initial supply to owner', async function () {
    const GoldToken = await ethers.getContractFactory('GoldToken');
    const token = await GoldToken.deploy(1000);
    await token.waitForDeployment();
    const [owner] = await ethers.getSigners();
    expect(await token.balanceOf(owner.address)).to.equal(1000);
  });

  it('allows owner to mint', async function () {
    const [owner, other] = await ethers.getSigners();
    const GoldToken = await ethers.getContractFactory('GoldToken');
    const token = await GoldToken.deploy(0);
    await token.waitForDeployment();
    await token.mint(other.address, 50);
    expect(await token.balanceOf(other.address)).to.equal(50);
  });

  it('allows holder to burn', async function () {
    const [owner] = await ethers.getSigners();
    const GoldToken = await ethers.getContractFactory('GoldToken');
    const token = await GoldToken.deploy(100);
    await token.waitForDeployment();
    await token.burn(40);
    expect(await token.totalSupply()).to.equal(60);
  });
});
