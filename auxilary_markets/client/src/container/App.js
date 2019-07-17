import React from "react";
import "./css/App.css";
import Navbar from "../component/Navbar";
import Dashboard from "./Dashboard";
import Web3 from "web3";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isConnected: false,
      peers: 0,
      version: ""
    };
    // this.web3 = new Web3(
    //   window.web3.currentProvider || "https://localhost:8545"
    // );
    this.web3 = new Web3(
      new Web3.providers.HttpProvider("https://localhost:8545")
    );
  }

  componentDidMount() {
    // if (this.web3 && this.web3.isConnected()) {
    //   this.setState({ isConnected: true });
    //   if (this.web3.net.listening) {
    //     this.setState({ peers: this.web3.net.peerCount });
    //   }
    //   this.setState({ version: this.web3.version.node });
    // }
  }

  render() {
    // console.log(this.web3.isConnected());
    console.log(this.web3);
    console.log(window.ethereum);
    console.log(window.ethereum.enable());
    // console.log(this.web3.eth.defaultAccount().then(data => console.log(data)));
    // console.log(this.web3.eth.getBalance().then(data => console.log(data)));
    // console.log(this.web3.eth.net.isListening.then(console.log));
    return (
      <div className="app">
        <Navbar />
        <Dashboard />
      </div>
    );
  }
}

export default App;
