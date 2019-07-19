import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import green from "@material-ui/core/colors/green";

const primary = green[600];
const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 40,
    width: "35rem",
    margin: "auto",
    padding: "1rem",
    marginLeft: 280,
    background: primary
  }
}));
const ExchangeButton = props => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Button
        variant="contained"
        size="large"
        color=""
        className={classes.root}
      >
        Exchange
      </Button>
    </React.Fragment>
  );
};

export default ExchangeButton;
