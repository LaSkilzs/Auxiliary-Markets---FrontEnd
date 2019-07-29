import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import green from "@material-ui/core/colors/green";
import ContractAid from "truffle-contract";
import Web3 from "web3";
import ExContract from "../contracts/build/Exchange.json";

class AdminForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      address: 0
    };
    const provider = new Web3.providers.HttpProvider("http://127.0.0.1:8545");
    this.web3 = new Web3(provider);
  }


  handleChange = e => this.setState({ [e.target.name]: e.target.value });
  handleSubmit = () => {
    const token = this.state;


    // call exchange function to add token
    console.log(token);
  };

  async Store() {
    const ExchangeAddress = '0xfad009BF255B8c5473c6A961b36FF91124DD2748';
    const Exchange = ContractAid(ExContract);
    Exchange.setProvider(this.web3.givenProvider);
    let check = false;
    Exchange.at(ExchangeAddress).then(function(Instance) {
    }).then(function(result) {
      if(Exchange.hasToken() === check)
        alert("Basuraaa!!! Token not yet Created!");
      else
      check = true;
        return Exchange.addToken(this.state.symbol, this.state.address)
    });
  }
  render() {
    const primary = green[600];
    return (
      <React.Fragment>
        <form noValidate autoComplete="off">
          <TextField
            style={{ margin: 8, width: "35rem" }}
            placeholder="Name of Token"
            margin="normal"
            variant="outlined"
            fullWidth
            name={"name"}
            value={this.state.name}
            onChange={e => this.handleChange(e)}
          />
          <TextField
            style={{ margin: 8, width: "35rem" }}
            placeholder="Address of Token"
            margin="normal"
            variant="outlined"
            fullWidth
            name={"address"}
            value={this.state.address}
            onChange={e => this.handleChange(e)}
          />
          <Button
            variant="contained"
            size="large"
            style={{ width: "35rem", background: primary }}
            onClick={() => this.handleSubmit()}
          >
            {this.props.btnName}
          </Button>
        </form>
      </React.Fragment>
    );
  }
}

export default AdminForm;
