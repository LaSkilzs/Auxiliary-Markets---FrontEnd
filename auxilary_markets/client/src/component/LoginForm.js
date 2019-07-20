import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Typography, Divider } from "@material-ui/core";
import green from "@material-ui/core/colors/green";

class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
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
    return (
      <form
        noValidate
        autoComplete="off"
        style={{ marginTop: 100, padding: 50 }}
      >
        <Typography
          style={{ fontWeight: "bold", fontSize: "2rem", marginTop: 200 }}
        >
          Login
        </Typography>
        <TextField
          label="email address"
          style={{ margin: 8, width: "35rem" }}
          placeholder="youremaile@example.com"
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
          label="Password"
          style={{ margin: 8, width: "35rem" }}
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
          style={{ width: "35rem", marginTop: 30, background: primary }}
          onClick={() => this.handleSubmit()}
        >
          Login
        </Button>
        <Divider />
        <p>
          If you do not have an account,
          <Button style={{ color: primary }} onClick={this.props.handleSignup}>
            Sign Up
          </Button>
        </p>
      </form>
    );
  }
}

export default LoginForm;
