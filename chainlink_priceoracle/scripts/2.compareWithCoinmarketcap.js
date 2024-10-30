/*
npx hardhat run .\scripts\2.compareWithCoinmarketcap.js --network ETH_goerli

*/
const axios = require('axios');
require("dotenv").config();

const hre = require("hardhat");

//Instead of hardcoding, we can read contractAddress and name from the json files
//If any issue you can use the hardcoded statements to get going with this script.

const contractName = "SampleContract";
let contractAddress = require(`../frontend/contractsData/${contractName}-address.json`);

async function main() {
    console.log("You have connected to following blockchain network: ", hre.network.name);

    const ContractInterface = await hre.ethers.getContractFactory(contractName);

    //The contract is already deployed, and we just want to mint
    const contractInstance = ContractInterface.attach(contractAddress.address);

    //Smoke tests to see we got connected to the blockchain, and to the contracts.
    const ethPriceFromContract = await contractInstance.getLatestPrice();
    console.log("Successfully connected to Contract " + contractName)
    console.log("Price from contract=" + ethPriceFromContract);
    const ethPriceFromCoinMarketCap = await getCurrentPriceUsingCoinMarketCap(1027);//1027 is Ethereum's ID
    console.log("Price from coinmarketcap=" + ethPriceFromCoinMarketCap);
    const ethPriceFromBinance = await getCurrentPriceUsingBinance();
    console.log("Price from Binance, in USDT=" + ethPriceFromBinance);

}


// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});


async function getCurrentPriceUsingCoinMarketCap(currencyID) {
    //Sample URL =https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest?slug=ethereum
    const url = `${process.env.COINMARKETCAP_BASE_URL}/v2/cryptocurrency/quotes/latest?id=${currencyID}`;
    let response = await axios.get(url, {
        headers: {
            'X-CMC_PRO_API_KEY': process.env.COINMARKETCAP_API_KEY,
        },
    });

    if (response) {
        // success
        const json = response.data;
        //        console.log(JSON.stringify(json));
        //console.log(JSON.stringify(json.data));


        const data = Object.values(json.data);
        //console.log(data[0].quote.USD.price);
        return data[0].quote.USD.price;

    }
}

async function getCurrentPriceUsingBinance(currencyID) {

    //https://api.binance.com/api/v3/avgPrice?symbol=ETHUSDT
    //https://api.binance.com/api/v3/ticker/price?symbol=ETHUSDT
    var burl = "https://data.binance.com";
    burl = "https://api.binance.com";
    var query = "/api/v3/avgPrice?symbol=ETHUSDT";
    query = "/api/v3/ticker/price?symbol=ETHUSDT"
    let url = burl + query;

    let response = await axios.get(url);
    return response.data.price;
}



