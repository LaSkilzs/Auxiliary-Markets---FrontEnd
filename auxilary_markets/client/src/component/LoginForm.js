import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Typography, Divider } from "@material-ui/core";
import green from "@material-ui/core/colors/green";

const primary = green[600];

const useStyles = makeStyles(theme => ({
  form: {
    marginTop: 100,
    padding: 50
  },
  button: {
    background: primary
  },
  h1: {
    fontWeight: "bold",
    fontSize: "2rem",
    marginTop: 200
  },
  link: {
    fontWeight: "bold",
    fontSize: "1rem",
    color: "red"
  }
}));

const LoginForm = props => {
  const classes = useStyles();
  return (
    <form noValidate autoComplete="off" className={classes.form}>
      <Typography className={classes.h1}>Login</Typography>
      <TextField
        label="email address"
        style={{ margin: 8, width: "35rem" }}
        placeholder="youremaile@example.com"
        margin="normal"
        variant="outlined"
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
        InputLabelProps={{
          shrink: true
        }}
      />
      <Button
        variant="contained"
        size="large"
        color={props.color}
        style={{ width: "35rem", marginTop: 30 }}
        className={classes.button}
      >
        Login
      </Button>
      <Divider />
      <p>
        If you do not have an account,
        <Button className={classes.link} onClick={props.handleSignup}>
          Sign Up
        </Button>
      </p>
    </form>
  );
};

export default LoginForm;
