import React from "react";
import "./css/App.css";
import Navbar from "../component/Navbar";
import Dashboard from "./Dashboard";
import Web3 from "web3";
//import * as ExchangeContract from "../contracts/build/Exchange.json";
import ContractAid from "truffle-contract";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userInfo: {
        address: "",
        weiBalance: "",
        ethBalance: ""
      },
      adminInfo: {
        adminAddress: "",
        adminWeiBalance: "",
        adminEthBalance: ""
      }
    };
    const provider = new Web3.providers.HttpProvider("http://127.0.0.1:8545");
    // const contract = require('truffle-contract');
    // Developer Environment
    this.web3 = new Web3(provider);
    // MetaMask Google Environment
    this.admin = new Web3(window.ethereum);
    window.ethereum.enable();

  }

  async componentDidMount() {
    this.web3.eth.getAccounts().then(data => {
      let address = data[0];
      this.web3.eth.getBalance(address, (error, balance) => {
        let bal = balance.toString();
        let eth = this.web3.utils.fromWei(bal, "ether");
        this.setState({
          userInfo: { address, weiBalance: bal, ethBalance: eth }
        });
      });
    });
    this.admin.eth.getAccounts().then(data => {
      let adminAddress = data[0];
      this.admin.eth.getBalance(adminAddress, (error, balance) => {
        let adminWeiBalance = balance.toString();
        let adminEthBalance = this.admin.utils.fromWei(balance, "ether");
        this.setState({
          adminInfo: { adminAddress, adminWeiBalance, adminEthBalance }
        });
      });
    });
  }

  async exchange(){
    // const ExchangeContract = new Web3.eth.Contract(ExchangeContract,ExchangeAddress );
    const ExchangeContract = require('../contracts/build/Exchange.json');
    ExchangeContract.setProvider("http://127.0.0.1:8545");
    const ExchangeAddress = 0x5Aa5b66232aAD80cB067151A6Aee8eEBdFF60Cf6;

    // const ContractAid = require('truffle-contract');
    const Exchange = ContractAid(ExchangeContract);
    var coin;

    Exchange.at(ExchangeAddress).then(function(instance) {
      coin = instance;
      return coin.addToken('User1 Ganache', 0x89CA3efb8b466E559B2FAdce9E1BE0213B9c64A2);
    }).then(function(result) {
      return coin.hasToken('User1 Ganache')
    }).catch(function(err){
      alert("Tu a Basuraaa" + err.message);
    });
      // Do something with the result or continue with more transactions.
  }

  render() {
    console.log(this.web3);
    console.log(this.state);
    return (
      <div className="app">
        <Navbar />
        <Dashboard
          userInfo={this.state.userInfo}
          adminInfo={this.state.adminInfo}
        />
      </div>
    );
  }
}

export default App;
