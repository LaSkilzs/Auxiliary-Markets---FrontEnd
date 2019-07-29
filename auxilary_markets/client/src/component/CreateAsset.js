// import java.util.*;
import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";
import green from "@material-ui/core/colors/green";
import ContractAid from "truffle-contract";
import Web3 from "web3";
import ExContract from "../contracts/build/Exchange.json";



class CreateAsset extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      symbol: "",
      name: "",
      address: "",
      total_supply: 0,
      market_cap: 0,
      circulating: 0,
      highest: 0.00,
      price: 0.00,
      units: 0
    };
    // const ExchangeContract = require('../contracts/build/Exchange.json');
    // var Web3 = require('web3');
    // var web3 = new Web3('http://127.0.0.1:8545');
    const provider = new Web3.providers.HttpProvider("http://127.0.0.1:8545");
    this.web3 = new Web3(provider);

  }
  // async waitandStore(){
  //   const timeout = async ms => new Promise(res => setTimeout(res, ms));
  //   let next = false;
  //   while (next === false) await timeout(100); // pause script but avoid browser to freeze ;)
  //   next = false; // reset var
  //   return next;
  //
  // }

  handleSubmit = () => {
    const token = this.state;
    console.log(token);
    // Contract Call to Store Data
    // var web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:8545'));
    const ExchangeAddress = '0xfad009BF255B8c5473c6A961b36FF91124DD2748';
    const Exchange = ContractAid(ExContract);
    Exchange.setProvider(this.web3.givenProvider);
    // Exchange = Exchange.at(ExchangeAddress);
    let check = false;
    // let symbol = newCoin.hasToken(this.state.symbol);
    let addy = this.state.address
    // waitandStore().then();
    Exchange.at(ExchangeAddress).then(function(Instance) {
      // let newCoin = Instance;
    }).then(function(result) {
      if(Exchange.hasToken() === check)
        alert("Basuraaa!!! Already Created ");
      else
      check = true;
        return Exchange.createToken(this.state.address, this.state.symbol)
    });
    console.log("This is the data for " + this.state.name + " coin Address: " + addy + " Symbol: " + this.state.symbol);
  };


  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const primary = green[600];
    return (

      <Grid container spacing={3} style={{ marginLeft: 100 }}>
        <Paper style={{ marginTop: 100, height: "55rem" }}>
          <Typography
            variant={"h4"}
            component={"h4"}
            style={{ padding: "5rem", margin: "auto", marginTop: 20 }}
          >
            Create New Token
          </Typography>
          <form noValidate autoComplete="off">
            <TextField
              label="Symbol"
              style={{ margin: 8, width: "35rem" }}
              placeholder="e.g.BTC"
              margin="normal"
              variant="outlined"
              name={"symbol"}
              value={this.state.symbol}
              onChange={e => this.handleChange(e)}
              InputLabelProps={{
                shrink: true
              }}
            />
            <TextField
              label="Asset Name"
              style={{ margin: 8, width: "35rem" }}
              placeholder="e.g.Bitcoin"
              margin="normal"
              variant="outlined"
              name={"name"}
              value={this.state.name}
              onChange={e => this.handleChange(e)}
              InputLabelProps={{
                shrink: true
              }}
            />
            <TextField
              label="Units/Tokens"
              style={{ margin: 8, width: "35rem" }}
              placeholder="e.g.10"
              margin="normal"
              variant="outlined"
              name={"units"}
              value={this.state.units}
              onChange={e => this.handleChange(e)}
              InputLabelProps={{
                shrink: true
              }}
            />
            <TextField
              label="Market Capitalization"
              style={{ margin: 8, width: "35rem" }}
              placeholder="e.g.23748404845"
              margin="normal"
              variant="outlined"
              name={"market_cap"}
              value={this.state.market_cap}
              onChange={e => this.handleChange(e)}
              InputLabelProps={{
                shrink: true
              }}
            />
            <TextField
              label="Total Supply"
              style={{ margin: 8, width: "35rem" }}
              placeholder="e.g.10000000"
              margin="normal"
              variant="outlined"
              name={"total_supply"}
              value={this.state.total_supply}
              onChange={e => this.handleChange(e)}
              InputLabelProps={{
                shrink: true
              }}
            />
            <TextField
              label="Circulating_Supply"
              style={{ margin: 8, width: "35rem" }}
              placeholder="e.g.25000"
              margin="normal"
              variant="outlined"
              name={"circulating"}
              value={this.state.circulating}
              onChange={e => this.handleChange(e)}
              InputLabelProps={{
                shrink: true
              }}
            />
            <TextField
              label="Highest Price"
              style={{ margin: 8, width: "35rem" }}
              placeholder="e.g.25.00"
              margin="normal"
              variant="outlined"
              name={"highest"}
              value={this.state.highest}
              onChange={e => this.handleChange(e)}
              InputLabelProps={{
                shrink: true
              }}
            />
            <TextField
              label="Price"
              style={{ margin: 8, width: "35rem" }}
              placeholder="e.g.20.00"
              margin="normal"
              variant="outlined"
              name={"price"}
              value={this.state.price}
              onChange={e => this.handleChange(e)}
              InputLabelProps={{
                shrink: true
              }}
            />
            <TextField
              label="Address"
              style={{ margin: 8, width: "35rem" }}
              placeholder="e.g.0x89CA3efb8b466EA592F0Adce9E1BE0213B9c64A2"
              margin="normal"
              variant="outlined"
              name={"address"}
              value={this.state.address}
              onChange={e => this.handleChange(e)}
              InputLabelProps={{
                shrink: true
              }}
            />
            <Grid item lg={6} style={{ marginLeft: 280, margin: "auto" }}>
              <Button
                variant="contained"
                size="large"
                onClick= {e => this.handleSubmit(e)}
                style={{
                  width: "35rem",
                  marginTop: 30,
                  background: primary
                }}
              >
                Create Asset Token
              </Button>
            </Grid>
          </form>
        </Paper>
      </Grid>
    );
  }
}

export default CreateAsset;
