import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";
import red from "@material-ui/core/colors/red";

const primary = green[600];
const secondary = red[700];

const useStyles = makeStyles(theme => ({
  button: {
    background: primary
  },
  button2: {
    background: secondary
  }
}));

const WDForm1 = props => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <form noValidate autoComplete="off">
        <TextField
          label="Amount In Ether"
          style={{ margin: 8, width: "35rem" }}
          placeholder="e.g.95"
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true
          }}
        />
        {props.btnName.includes("Deposit") ? (
          <Button
            variant="contained"
            size="large"
            color={props.color}
            style={{ width: "35rem" }}
            className={classes.button}
          >
            {props.btnName}
          </Button>
        ) : (
          <Button
            variant="contained"
            size="large"
            color={props.color}
            style={{ width: "35rem" }}
            className={classes.button2}
          >
            {props.btnName}
          </Button>
        )}
      </form>
    </React.Fragment>
  );
};

export default WDForm1;
