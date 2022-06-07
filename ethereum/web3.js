import Web3 from "web3";

let web3;

if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
  //we are in the browser and metamask is running
  web3 = new Web3(window.ethereum);
} else {
  //we are on the server OR the user is not runnong metamask
  const provider = new Web3.providers.HttpProvider(
    "https://rinkeby.infura.io/v3/6f456bcc2fc34fdabea3a16dfa3ae345"
  );
  web3 = new Web3(provider);
}

export default web3;
