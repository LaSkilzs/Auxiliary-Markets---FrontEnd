import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Form from "./Form";

const useStyles = makeStyles(theme => ({
  grid: {
    marginTop: 50,
    marginLeft: 200,
    width: "80rem"
  },
  subGrid: {
    marginTop: 60,
    marginLeft: 200,
    width: "80rem"
  },
  innerContainer: {
    marginTop: 10
  },
  paper: {
    height: "27rem"
  },
  moneyContainer: {
    marginTop: 60,
    padding: "1.3rem"
  },
  moneyContainer2: {
    padding: "1.3rem"
  }
}));

const Withdraw = props => {
  const classes = useStyles();
  return (
    <div>
      <Typography
        variant="h3"
        style={{ marginTop: 100, marginLeft: 200, textAlign: "left" }}
      >
        New Order
      </Typography>
      <Grid container spacing={2} className={classes.grid}>
        <Grid item md={6}>
          <Paper className={classes.paper}>
            <h2>Buy Token</h2>
            <Form btnName={"Buy Token"} color={"primary"} />
          </Paper>
        </Grid>
        <Grid item md={6}>
          <Paper className={classes.paper}>
            <h2>Sell Token</h2>
            <Form btnName={"Sell Token"} color={"secondary"} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Withdraw;
