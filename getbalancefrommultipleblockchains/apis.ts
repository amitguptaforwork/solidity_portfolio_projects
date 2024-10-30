//import AnkrscanProvider from '@ankr.com/ankr.js';
import { AnkrProvider } from '@ankr.com/ankr.js';
import type { Blockchain } from '@ankr.com/ankr.js/dist/types';

const provider = new AnkrProvider('https://rpc.ankr.com/multichain/4035658e3524cbfe76215a86b745adc08ceae558d1fadc11aa501f5af4179178');

//defining the list of supported blockchains
const listOfChains: Blockchain[] = ['eth', 'arbitrum', 'avalanche',
    'bsc', 'fantom', 'polygon',];

//key-value pair mapping of chains to their native symbols
export const chainsToNativeSymbols: { [key in Blockchain]: string } = {
    eth: 'ETH',
    arbitrum: 'ETH',
    avalanche: 'AVAX',
    bsc: 'BNB',
    fantom: 'FTM',
    polygon: 'MATIC',
};

export const getAccountBalance = async (walletAddress: string) => {
    return provider.getAccountBalance({
        walletAddress,

    });
}

//getAccountBalance function to fetch coins and their respective token balances
export const getAccountBalance2 = async (walletAddress: string,
    blockchain: Blockchain) => {
    return provider.getAccountBalance({
        walletAddress,
        blockchain,
    });
};

//use getAccountBalance to sum total balance across chains
export const getTotalMultichainBalance = async (walletAddress: string) => {
    let total = 0;
    let breakup = "";
    for await (const chain of listOfChains) {
        const { totalBalanceUsd, assets } = await getAccountBalance2(
            walletAddress,
            chain
        );
        total += +totalBalanceUsd;
        breakup += "[" + chain + ":" + totalBalanceUsd + "]";
    }
    return { total, breakup };
};