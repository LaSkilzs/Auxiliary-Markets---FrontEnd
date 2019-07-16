import Web3 from "web3";
// import ganache from "ganache-cli";
const web3 = new Web3(window.web3.currentProvider);
// const web3 = new Web3;
// web3.setProvider(ganache.provider());

export default web3;
