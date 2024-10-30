"use client"; // This is a client component 
import { useEffect, useState } from 'react';
import {
  getAccountBalance, getTotalMultichainBalance
} from '../apis';


export default function Home() {
  const [account, setAccount] = useState("0xd8da6bf26964af9d7eed9e03e53415d37aa96045");
  const [enteredAccount, setEnteredAccount] = useState("0xd8da6bf26964af9d7eed9e03e53415d37aa96045");
  const [total, setTotal] = useState("fetching...");
  const [netWorth, setNetWorth] = useState("fetching...");
  const [breakup, setBreakup] = useState("fetching...");

  function onAccountChange(event) {

    console.log("In onAccountChange:", event.target.value)
    setEnteredAccount(event.target.value)

  }

  function onAccountFetch(event) {
    console.log("In onAccountFetch:vlaue of enteredAccount is ", enteredAccount)
    setTotal("fetching ....")
    setNetWorth("fetching ....")
    setBreakup("fetching ....")
    setAccount(enteredAccount);
  }


  useEffect(() => {
    (async () => {
      console.log("now in useEffect for account:", account)
      let tempNW = await getTotalMultichainBalance(account);
      setNetWorth(tempNW.total.toString());
      setBreakup(tempNW.breakup);

      const tempTotal = await getAccountBalance(account,
      );

      setTotal(tempTotal.totalBalanceUsd);
      console.log("Got the new data")
      console.log({ tempTotal });

    })();
    return () => {

    };
  }, [account]);



  return (
    <div className='p-10 flex flex-col items-center'>
      <label htmlFor="account" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Account</label>
      {/* <input type="text" id="account" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={account} required /> */}
      <input type="text" id="account" className="bg-gray-50 border border-gray-300 block w-full " value={enteredAccount} onChange={onAccountChange} required />
      <button type="button" onClick={onAccountFetch} className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get Details for account</button>


      <h1 className='text-3xl font-bold'>Account Balance (USD)</h1>
      <p>{total}</p>
      <h1 className='text-3xl font-bold'>Net Worth (USD)</h1>
      <p>{netWorth}</p>
      <h1 className='text-3xl font-bold'>breakup</h1>
      <p>{breakup}</p>
    </div>
  );
}
