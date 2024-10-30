/*
npx hardhat run .\scripts\1.deploy.js --network ETH_goerli

*/
// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
//This function allows to deploy contracts with 0 or more parameters.
//params is a array.  Pass contructor arguments as params array
async function deploy(contractName, params) {
    const ContractInterface = await hre.ethers.getContractFactory(contractName);
    let contractInstance;
    switch (params.length) {
        case 0: contractInstance = await ContractInterface.deploy(); break;
        case 1: contractInstance = await ContractInterface.deploy(params[0]); break;
        case 2: contractInstance = await ContractInterface.deploy(params[0], params[1]); break;
        case 3: contractInstance = await ContractInterface.deploy(params[0], params[1], params[2]); break;
        case 4: contractInstance = await ContractInterface.deploy(params[0], params[1], params[2], params[3]); break;
        case 5: contractInstance = await ContractInterface.deploy(params[0], params[1], params[2], params[3], params[4]); break;
        case 6: contractInstance = await ContractInterface.deploy(params[0], params[1], params[2], params[3], params[4], params[5]); break;
    }
    await contractInstance.deployed();
    console.log('\x1b[35m%s\x1b[0m',
        `Contract ${contractName} deployed to ${contractInstance.address} on blockchain ${hre.network.name} with ${params.length} parameters: ${params}`
    );

    //We are not using ethernal in this project, so commenting this out.
    // await hre.ethernal.push({
    //     name: contractName,
    //     address: contractInstance.address
    // });

    //We have to manually run command to verify the contracts.
    //Printing the relevant commands that can then be executed manually from command line.
    //Ethernal command needs to be executed in terminal of hardhat_localblockchain_starter project
    let commandForVerification = "node scripts/verify.js " + contractName + " " + contractInstance.address;
    console.log("Command to verify on Ethernal, using hardhat_localblockchain_starter project")
    console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
    console.log(commandForVerification);

    //npx hardhat verify --network goerli <DEPLOYED_CONTRACT_ADDRESS> "Constructor argument 1"
    commandForVerification = "npx hardhat verify --network ETH_goerli " + contractInstance.address + " " + params.join(" ");
    console.log("Command to verify on Etherscan")
    console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
    console.log(commandForVerification);

    //Write the address and json files to contractsData directory, for easy access from frontend and other scripts.
    saveFrontendFiles(contractInstance, contractName);
}

//Write the address and json files to contractsData directory, for easy access from frontend and other scripts.
//Update contractsData location as required
function saveFrontendFiles(contract, name) {
    const fs = require("fs");
    const contractsDir = __dirname + "/../frontend/contractsData";

    if (!fs.existsSync(contractsDir)) {
        fs.mkdirSync(contractsDir);
    }

    fs.writeFileSync(
        contractsDir + `/${name}-address.json`,
        JSON.stringify({ address: contract.address }, undefined, 2)
    );

    const contractArtifact = artifacts.readArtifactSync(name);

    fs.writeFileSync(
        contractsDir + `/${name}.json`,
        JSON.stringify(contractArtifact, null, 2)
    );
}


async function main() {
    const signers = await ethers.getSigners();
    console.log("Deploying contracts with the account:", signers[0].address);
    console.log("Account balance:", (await signers[0].getBalance()).toString());

    await deploy("SampleContract", []);
    //await deploy("MySplitter", [[signers[1].address, signers[2].address], [80, 20]]);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
