import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 200
  }
}));

const Watchlist = props => {
  const classes = useStyles();
  return (
    <div>
      <h1 className={classes.root}>Watchlist</h1>
    </div>
  );
};

export default Watchlist;
