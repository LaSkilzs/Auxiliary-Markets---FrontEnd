import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
// import red from "@material-ui/core/colors/red";

// const primary = red[700];
const useStyles = makeStyles(theme => ({
  root: {
    padding: "5rem"
    // color: primary
  },
  root1: {
    // color: primary
  },
  paper: {
    height: "24rem",
    width: "80rem",
    marginLeft: 280,
    marginTop: 80
  }
}));

const ExchangeWelcome = props => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <Typography variant="h2" component="h1" className={classes.root}>
        Welcome to Zap's Crypto Asset Market
      </Typography>
      <Typography variant="h5" component="h1" className={classes.root1}>
        Pick your Exchange
      </Typography>
      <Typography variant="h5" component="h1" className={classes.root1}>
        or
      </Typography>
      <Typography variant="h5" component="h1" className={classes.root1}>
        Search for an Asset
      </Typography>
    </Paper>
  );
};

export default ExchangeWelcome;
