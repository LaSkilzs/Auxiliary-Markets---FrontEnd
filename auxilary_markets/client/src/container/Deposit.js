import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import WDForm1 from "../component/WDForm1";
import WDForm2 from "../component/WDForm2";

const useStyles = makeStyles(theme => ({
  grid: {
    marginTop: 30,
    marginLeft: 200,
    width: "80rem"
  },
  grid2: {
    marginTop: 20,
    marginLeft: 200,
    width: "80rem"
  },
  subGrid: {
    marginTop: 40,
    marginLeft: 200,
    width: "80rem"
  },
  innerContainer: {
    marginTop: 10
  },
  paper: {
    height: "17rem"
  },
  paper2: {
    height: "12rem"
  },
  moneyContainer: {
    marginTop: 60,
    padding: "1.3rem"
  },
  moneyContainer2: {
    padding: "1.3rem"
  }
}));

const Deposit = props => {
  const classes = useStyles();
  return (
    <div>
      <Typography
        variant="h3"
        style={{ marginTop: 100, textAlign: "left", marginLeft: 200 }}
      >
        Distributed Token Exchange
      </Typography>
      <Grid container spacing={2} className={classes.grid}>
        <Grid item md={6}>
          <Paper className={classes.paper}>
            <h2>Deposit Token</h2>
            <WDForm2 btnName={"Deposit Token"} color={"secondary"} />
          </Paper>
        </Grid>
        <Grid item md={6}>
          <Paper className={classes.paper2}>
            <h2>Deposit Ether</h2>
            <WDForm1 btnName={"Deposit Ether"} color={"primary"} />
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={2} className={classes.grid2}>
        <Grid item md={6}>
          <Paper className={classes.paper}>
            <h2>Withdraw Token</h2>
            <WDForm2 btnName={"Withdraw Token"} color={"secondary"} />
          </Paper>
        </Grid>
        <Grid item md={6}>
          <Paper className={classes.paper2}>
            <h2>Withdraw Ether</h2>
            <WDForm1 btnName={"Withdraw Ether"} color={"primary"} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Deposit;
