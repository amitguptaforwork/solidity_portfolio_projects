require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-chai-matchers");
require("dotenv").config();

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  // ==> Solidity Config
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  // ==> Plugins Config
  etherscan: {
    apiKey: {
      mainnet: process.env.REACT_APP_ETHSCAN_API,
      goerli: process.env.REACT_APP_ETHSCAN_API
    },
  },


  // ==> Network Config

  defaultNetwork: "hardhat",
  networks: {

    // ==> Mainnets

    ETH_mainnet: {
      url: process.env.ETH_MAINNET + process.env.API_KEY_ETH_MAINNET,
      accounts: [process.env.PROD_DEPLOYER_PRIVATE_KEY],
      gas: "auto", // Limit the gas to x number.
      gasPrice: "auto", // 25 gwei (in wei) (default: 100 gwei)
    },

    // ==> Testnets

    ETH_goerli: {
      url: process.env.ETH_TESTNET_GOERLI + process.env.API_KEY_GOERLI,
      accounts: [process.env.TEST_DEPLOYER_PRIVATE_KEY],
      gas: "auto", // Limit the gas to x number.
      gasPrice: "auto", // 25 gwei (in wei) (default: 100 gwei)
    },
  },
};


// set proxy, if getting error while contract verification (issue specific to Amit computer)
const proxyUrl = 'http://192.168.2.120:8080';   // change to yours, With the global proxy enabled, change the proxyUrl to your own proxy link. The port may be different for each client.
const { ProxyAgent, setGlobalDispatcher } = require("undici");
const proxyAgent = new ProxyAgent(proxyUrl);
setGlobalDispatcher(proxyAgent);