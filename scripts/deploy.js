const hre = require("hardhat");

async function main() {
  const Vaultverse = await hre.ethers.getContractFactory("Vaultverse");
  const vaultverse = await Vaultverse.deploy();

  await vaultverse.deployed();

  console.log("✅ Vaultverse deployed to:", vaultverse.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
