const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("GetSortedBalances", function () {
  it("Should return the new greeting once it's changed", async function () {
    const GetSortedBalances = await ethers.getContractFactory("GetSortedBalances");
    const getSortedBalances = await GetSortedBalances.deploy();
    await getSortedBalances.deployed();

    await getSortedBalances.setAddressBalance("0x4B20993Bc481177ec7E8f571ceCaE8A9e22C02db", 1234);
    await getSortedBalances.setAddressBalance("0x5B38Da6a701c568545dCfcB03FcB875f56beddC4", 12345);
    await getSortedBalances.setAddressBalance("0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2", 123);
    await getSortedBalances.setAddressBalance("0x17F6AD8Ef982297579C203069C1DbfFE4348c372", 12377);

    expect(await getSortedBalances.getBalanceCount()).to.equal(4);
    await getSortedBalances.sortAddresses();

    const result = await getSortedBalances.getSortedAddresses();
    console.log(result);

  });
});
