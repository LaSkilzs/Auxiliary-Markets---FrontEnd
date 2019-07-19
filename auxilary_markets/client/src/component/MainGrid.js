import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  h1: {
    marginTop: 150
  }
}));

const MainGrid = props => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <h1 className={classes.h1}>Home Page</h1>
    </React.Fragment>
  );
};

export default MainGrid;
