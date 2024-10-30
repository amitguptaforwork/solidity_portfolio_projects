const { expect } = require("chai");

describe("SampleContract Tests", function () {
  // Contracts are deployed using the first signer/account by default
  let owner, contractInstance;
  beforeEach(async () => {
    [owner] = await ethers.getSigners();

    const contractName = "SampleContract";//TODO:This sample contract name from amit_template needs to be changed to actual contract
    const Contract = await hre.ethers.getContractFactory(contractName);
    contractInstance = await Contract.deploy("amit");//TODO:Contructor arguments relevant to the contract 
  });

  it("Should set the right owner", async function () {
    expect(await contractInstance.owner()).to.equal(owner.address);
  });
});
