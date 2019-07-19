import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import green from "@material-ui/core/colors/green";
import { makeStyles } from "@material-ui/core/styles";

const primary = green[600];

const useStyles = makeStyles(theme => ({
  button: {
    background: primary
  }
}));

const AdminForm1 = props => {
  const classes = useStyles();
  return (
    <div>
      <form noValidate autoComplete="off">
        <TextField
          style={{ margin: 8, width: "35rem" }}
          placeholder="Amount in Token"
          margin="normal"
          variant="outlined"
        />
        <TextField
          style={{ margin: 8, width: "35rem" }}
          placeholder="To(address)"
          margin="normal"
          variant="outlined"
        />
        <Button
          variant="contained"
          size="large"
          color={primary}
          style={{ width: "35rem" }}
          className={classes.button}
        >
          {props.btnName}
        </Button>
      </form>
    </div>
  );
};

export default AdminForm1;
