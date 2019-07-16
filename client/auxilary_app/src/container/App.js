import React from "react";
import "./css/App.css";
import Navbar from "../component/Navbar";
import Dashboard from "./Dashboard";
import web3 from "../web3";

const App = () => {
  web3.eth.getAccounts().then(data => console.log(data));
  return (
    <div className="app">
      <Navbar />
      <Dashboard />
    </div>
  );
};

export default App;
