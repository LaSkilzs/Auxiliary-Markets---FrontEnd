import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import green from "@material-ui/core/colors/green";
import red from "@material-ui/core/colors/red";

class WDForm2 extends React.Component {
  constructor() {
    super();
    this.state = {
      symbol: "",
      token: ""
    };
  }
  handleChange = e => this.setState({ [e.target.name]: e.target.value });
  handleSubmit = () => {
    const token = this.state;
    console.log(token);
    // call exchange function to add token
  };
  render() {
    const primary = green[600];
    const secondary = red[700];

    return (
      <React.Fragment>
        <form noValidate autoComplete="off">
          <TextField
            label="Symbol Name"
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
            label="Amount In Tokens"
            style={{ margin: 8, width: "35rem" }}
            placeholder="e.g.95"
            margin="normal"
            variant="outlined"
            name={"token"}
            value={this.state.token}
            onChange={e => this.handleChange(e)}
            InputLabelProps={{
              shrink: true
            }}
          />
          {this.props.btnName.includes("Deposit") ? (
            <Button
              variant="contained"
              size="large"
              style={{ width: "35rem", background: primary }}
              onClick={() => this.handleSubmit()}
            >
              {this.props.btnName}
            </Button>
          ) : (
            <Button
              variant="contained"
              size="large"
              style={{ width: "35rem", background: secondary }}
              onClick={() => this.handleSubmit()}
            >
              {this.props.btnName}
            </Button>
          )}
        </form>
      </React.Fragment>
    );
  }
}

export default WDForm2;
