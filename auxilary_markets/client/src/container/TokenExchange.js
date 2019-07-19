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
    marginLeft: 260,
    width: "80rem"
  },
  grid2: {
    marginTop: 20,
    marginLeft: 260,
    width: "80rem"
  },
  subGrid: {
    marginTop: 40,
    marginLeft: 260,
    width: "80rem"
  },
  innerContainer: {
    marginTop: 10
  },
  paper: {
    height: "20rem"
  },
  paper2: {
    height: "15rem"
  },
  moneyContainer: {
    marginTop: 60,
    padding: "1.3rem"
  },
  moneyContainer2: {
    padding: "1.3rem"
  }
}));

const TokenExchange = props => {
  const classes = useStyles();
  return (
    <div>
      <Typography
        variant="h3"
        style={{
          marginTop: 150,
          textAlign: "left",
          marginLeft: 280
        }}
      >
        Distributed Token Exchange
      </Typography>
      <Grid container spacing={2} className={classes.grid}>
        <Grid item md={6}>
          <Paper className={classes.paper}>
            <h2 style={{ padding: 20 }}>Deposit Token</h2>
            <WDForm2 btnName={"Deposit Token"} color={""} />
          </Paper>
        </Grid>
        <Grid item md={6}>
          <Paper className={classes.paper}>
            <h2 style={{ padding: 20 }}>Withdraw Token</h2>
            <WDForm2 btnName={"Withdraw Token"} color={""} />
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={2} className={classes.grid2}>
        <Grid item md={6}>
          <Paper className={classes.paper2}>
            <h2 style={{ padding: 20 }}>Deposit Ether</h2>
            <WDForm1 btnName={"Deposit Ether"} color={""} />
          </Paper>
        </Grid>
        <Grid item md={6}>
          <Paper className={classes.paper2}>
            <h2 style={{ padding: 20 }}>Withdraw Ether</h2>
            <WDForm1 btnName={"Withdraw Ether"} color={""} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default TokenExchange;
