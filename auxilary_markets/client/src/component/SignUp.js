import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Typography, Divider } from "@material-ui/core";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import green from "@material-ui/core/colors/green";

class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      email: "",
      password: "",
      pass_confirmation: "",
      account: ""
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
          style={{ fontWeight: "bold", fontSize: "2rem", marginTop: 100 }}
        >
          Signup
        </Typography>
        <TextField
          label="username"
          style={{ margin: 8, width: "35rem" }}
          placeholder="username at least 5 characters"
          margin="normal"
          variant="outlined"
          name={"username"}
          value={this.state.username}
          onChange={e => this.handleChange(e)}
          InputLabelProps={{
            shrink: true
          }}
        />
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
        <TextField
          label="Password Confirmation"
          style={{ margin: 8, width: "35rem" }}
          placeholder="password"
          margin="normal"
          variant="outlined"
          name={"pass_confirmation"}
          value={this.state.pass_confirmation}
          onChange={e => this.handleChange(e)}
          InputLabelProps={{
            shrink: true
          }}
        />
        <FormControl variant="outlined" style={{ minWidth: 120 }}>
          <NativeSelect
            name="account"
            value={this.state.account}
            onSelect={e => this.handleChange(e.target.value)}
            style={{ width: "35rem" }}
            input={<OutlinedInput name="account" />}
          >
            <option value="" />
            <option value={10}>User</option>
            <option value={20}>Admin</option>
            <option value={30}>Developer</option>
          </NativeSelect>
          <FormHelperText>Chooose Type of Account</FormHelperText>
        </FormControl>
        <Button
          variant="contained"
          size="large"
          style={{ width: "35rem", marginTop: 30, background: primary }}
          onClick={() => this.handleSubmit()}
        >
          Create New Account
        </Button>
        <Divider />
      </form>
    );
  }
}

export default Signup;
