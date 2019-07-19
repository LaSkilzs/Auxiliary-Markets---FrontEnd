import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import red from "@material-ui/core/colors/red";

const primary = red[700];

const useStyles = makeStyles(theme => ({
  root: {
    margin: "auto",
    width: "12rem",
    padding: ".5rem",
    marginTop: "1.2rem",
    marginLeft: "3rem",
    backgroundColor: primary,
    color: "white",
    fontWeight: "bold"
  }
}));
const TabButton = props => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Button
        variant="contained"
        className={classes.root}
        onClick={props.handleClick}
      >
        {props.name}
      </Button>
    </React.Fragment>
  );
};

export default TabButton;
