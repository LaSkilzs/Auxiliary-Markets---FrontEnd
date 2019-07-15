import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 100,
    width: "35rem",
    margin: "auto",
    padding: "1rem",
    marginLeft: 60
  }
}));
const ExchangeButton = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Button
        variant="contained"
        size="large"
        color="primary"
        className={classes.root}
      >
        Exchange
      </Button>
    </React.Fragment>
  );
};

export default ExchangeButton;
