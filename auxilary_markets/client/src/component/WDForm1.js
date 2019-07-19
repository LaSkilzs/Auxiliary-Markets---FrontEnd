import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import green from "@material-ui/core/colors/green";
import red from "@material-ui/core/colors/red";

class WDForm1 extends React.Component {
  constructor() {
    super();
    this.state = {
      amount_in_ether: ""
    };
  }
  handleChange = e => this.setState({ [e.target.name]: e.target.value });
  handleSubmit = () => {
    const ether = this.state;
    console.log(ether);
    // call exchange function to add token
  };
  render() {
    const primary = green[600];
    const secondary = red[700];

    return (
      <React.Fragment>
        <form noValidate autoComplete="off">
          <TextField
            label="Amount In Ether"
            style={{ margin: 8, width: "35rem" }}
            placeholder="e.g.95"
            margin="normal"
            variant="outlined"
            name={"amount_in_ether"}
            value={this.state.amount_in_ether}
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

export default WDForm1;
