import React from "react";
import "./css/App.css";
import Navbar from "../component/Navbar";
import Dashboard from "./Dashboard";
import Web3 from "web3";
import TruffleContract from "truffle-contract";
import AuxMarket from "../contracts/build/Exchange.json";

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
    // Developer Environment
    this.web3 = new Web3(provider);
    // MetaMask Google Environment
    this.admin = new Web3(window.ethereum);
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
