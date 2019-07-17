import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 20,
    marginBottom: 20,
    width: "25rem",
    margin: "auto",
    padding: "1rem"
  }
}));

const TradingButton = props => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Button
        variant="contained"
        size="large"
        color={"primary"}
        className={classes.root}
      >
        {props.name}
      </Button>
    </React.Fragment>
  );
};

export default TradingButton;
