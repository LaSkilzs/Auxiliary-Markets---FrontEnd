import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Typography, Divider } from "@material-ui/core";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import OutlinedInput from "@material-ui/core/OutlinedInput";
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
    marginTop: 100
  },
  link: {
    fontWeight: "bold",
    fontSize: "1rem",
    color: "red"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
    width: "35rem"
  }
}));

const Signup = props => {
  const classes = useStyles();
  return (
    <form noValidate autoComplete="off" className={classes.form}>
      <Typography className={classes.h1}>Signup</Typography>
      <TextField
        label="username"
        style={{ margin: 8, width: "35rem" }}
        placeholder="username at least 5 characters"
        margin="normal"
        variant="outlined"
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
      <TextField
        label="Password Confirmation"
        style={{ margin: 8, width: "35rem" }}
        placeholder="password"
        margin="normal"
        variant="outlined"
        InputLabelProps={{
          shrink: true
        }}
      />
      <FormControl variant="outlined" className={classes.formControl}>
        <NativeSelect
          name="account"
          input={<OutlinedInput name="account" />}
          className={classes.selectEmpty}
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
        color={props.color}
        style={{ width: "35rem", marginTop: 30 }}
        className={classes.button}
      >
        Create New Account
      </Button>
      <Divider />
    </form>
  );
};

export default Signup;
