import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import green from "@material-ui/core/colors/green";

const primary = green[600];
const useStyles = makeStyles(theme => ({
  button: {
    background: primary
  }
}));

const AdminForm = props => {
  const classes = useStyles();
  return (
    <div>
      <form noValidate autoComplete="off">
        <TextField
          style={{ margin: 8, width: "35rem" }}
          placeholder="Name of Token"
          margin="normal"
          variant="outlined"
          fullWidth
        />
        <TextField
          style={{ margin: 8, width: "35rem" }}
          placeholder="Address of Token"
          margin="normal"
          variant="outlined"
          fullWidth
        />
        <Button
          variant="contained"
          size="large"
          color={props.color}
          style={{ width: "35rem" }}
          className={classes.button}
        >
          {props.btnName}
        </Button>
      </form>
    </div>
  );
};

export default AdminForm;
