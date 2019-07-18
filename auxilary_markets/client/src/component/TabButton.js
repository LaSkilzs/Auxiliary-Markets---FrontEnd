import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    margin: "auto",
    width: "12rem",
    padding: ".5rem",
    marginTop: "1.2rem",
    marginLeft: "3rem"
  }
}));
const TabButton = props => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Button
        variant="contained"
        color={props.color}
        className={classes.root}
        onClick={props.handleClick}
      >
        {props.name}
      </Button>
    </React.Fragment>
  );
};

export default TabButton;
