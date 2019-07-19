import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";
import green from "@material-ui/core/colors/green";

class CreateExchange extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      phrase: "",
      address: "",
      email: "",
      password: ""
    };
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value });
  handleSubmit = () => {
    const exchange = this.state;
    console.log(exchange);
    // Create new wallet address for exchange
  };
  render() {
    const primary = green[600];
    return (
      <Grid container spacing={3}>
        <Paper style={{ marginTop: 100, height: "52rem" }}>
          <Typography
            variant={"h4"}
            component={"h4"}
            style={{ padding: "5rem", margin: "auto", marginTop: 20 }}
          >
            Create New Exchange Account
          </Typography>
          <form noValidate autoComplete="off" style={{ marginLeft: 280 }}>
            <TextField
              label="name of exchange"
              style={{ margin: 8, width: "50rem" }}
              placeholder="e.g.Cryto Currencies"
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
              label="Mnemonic Phrase"
              style={{ margin: 8, width: "50rem" }}
              placeholder="e.g.apple run go by the see or elephant moves for free in the tree"
              margin="normal"
              variant="outlined"
              name={"phrase"}
              value={this.state.phrase}
              onChange={e => this.handleChange(e)}
              InputLabelProps={{
                shrink: true
              }}
            />
            <TextField
              label="Account Address"
              style={{ margin: 8, width: "50rem" }}
              placeholder="e.g.0x090808498095420542"
              margin="normal"
              variant="outlined"
              name={"address"}
              value={this.state.address}
              onChange={e => this.handleChange(e)}
              InputLabelProps={{
                shrink: true
              }}
            />
            <TextField
              label="email address"
              style={{ margin: 8, width: "50rem" }}
              placeholder="e.g.john@goo.com"
              margin="normal"
              variant="outlined"
              name={"email"}
              value={this.state.email}
              onChange={e => this.handleChange(e)}
              InputLabelProps={{
                shrink: true
              }}
            />
            <TextField
              label="password"
              style={{ margin: 8, width: "50rem" }}
              placeholder="password"
              margin="normal"
              variant="outlined"
              name={"password"}
              value={this.state.password}
              onChange={e => this.handleChange(e)}
              InputLabelProps={{
                shrink: true
              }}
            />

            <Button
              variant="contained"
              size="large"
              style={{ width: "50rem", marginTop: 30, background: primary }}
              onClick={() => this.handleSubmit()}
            >
              Create Exchange
            </Button>
          </form>
        </Paper>
      </Grid>
    );
  }
}

export default CreateExchange;
