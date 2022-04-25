const hre = require("hardhat");

async function main() {
  const GetSortedBalances = await hre.ethers.getContractFactory("GetSortedBalances");
  const getSortedBalances = await GetSortedBalances.deploy();
  await getSortedBalances.deployed();
  console.log("GetSortedBalances deployed to:", getSortedBalances.address);
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
