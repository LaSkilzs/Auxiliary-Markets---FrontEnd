import React from "react";
import "./css/App.css";
import Navbar from "../component/Navbar";
import Dashboard from "./Dashboard";
// import getWeb3 from "../utils/getWeb3";
import Web3 from "web3";
import TruffleContract from "truffle-contract";
import AuxMarket from "../contracts/build/Exchange.json";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      address: "",
      weiBalance: "",
      ethBalance: ""
    };
    this.web3 = new Web3(window.ethereum);
  }

  async componentDidMount() {
    this.web3.eth.getAccounts().then(data => {
      let address = data[0];
      this.web3.eth.getBalance(address, (error, balance) => {
        let bal = balance.toString();
        let eth = this.web3.utils.fromWei(bal, "ether");
        this.setState({ address, weiBalance: bal, ethBalance: eth });
      });
    });
  }

  render() {
    console.log(this.state);
    return (
      <div className="app">
        <Navbar />
        <Dashboard userInfo={this.state} />
      </div>
    );
  }
}

export default App;
