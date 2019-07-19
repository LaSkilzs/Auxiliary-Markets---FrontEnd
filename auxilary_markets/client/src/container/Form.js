import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import green from "@material-ui/core/colors/green";
import red from "@material-ui/core/colors/red";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      amount_tokens: "",
      price_in_wei: "",
      type: ""
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
      <form noValidate autoComplete="off">
        <TextField
          label="Symbol Name"
          style={{ margin: 8, width: "35rem" }}
          placeholder="e.g.BTC"
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
          label="Amount In Tokens"
          style={{ margin: 8, width: "35rem" }}
          placeholder="e.g.95"
          margin="normal"
          variant="outlined"
          name={"amount_tokens"}
          value={this.state.amount_tokens}
          onChange={e => this.handleChange(e)}
          InputLabelProps={{
            shrink: true
          }}
        />
        <TextField
          label="Price In Wei"
          style={{ margin: 8, width: "35rem" }}
          placeholder="e.g.95000000"
          margin="normal"
          variant="outlined"
          name={"price_in_wei"}
          value={this.state.price_in_wei}
          onChange={e => this.handleChange(e)}
          InputLabelProps={{
            shrink: true
          }}
        />
        {this.props.btnName.includes("Buy") ? (
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
    );
  }
}

export default Form;
