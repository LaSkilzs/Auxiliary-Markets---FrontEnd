import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import green from "@material-ui/core/colors/green";

class AdminForm1 extends React.Component {
  constructor() {
    super();
    this.state = {
      amount_tokens: "",
      address: ""
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
    return (
      <div>
        <form noValidate autoComplete="off">
          <TextField
            style={{ margin: 8, width: "35rem" }}
            placeholder="Amount in Token"
            margin="normal"
            variant="outlined"
            name={"amount_tokens"}
            value={this.state.amount_tokens}
            onChange={e => this.handleChange(e)}
          />
          <TextField
            style={{ margin: 8, width: "35rem" }}
            placeholder="To(address)"
            margin="normal"
            variant="outlined"
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
      </div>
    );
  }
}

export default AdminForm1;
