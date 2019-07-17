import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TradingButton from "./TradingButton";
import TradingTable from "./TradingTable";

const useStyles = makeStyles(theme => ({
  grid: {
    marginTop: 200,
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
    // marginTop: 60,
    // padding: "1.3rem"
  },
  moneyContainer2: {
    padding: "1.3rem"
  }
}));

const TradingGrid = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={2} className={classes.grid}>
      <Grid item md={6}>
        <Paper>
          <h2>Buy</h2>
          <Grid container className={classes.moneyContainer}>
            <TradingTable price={"Bid"} />
          </Grid>
          <TradingButton color={"#2e7d32"} name={"buy"} />
        </Paper>
      </Grid>
      <Grid item md={6}>
        <Paper>
          <h2>Sell</h2>
          <Grid container className={classes.moneyContainer}>
            <TradingTable price={"Ask"} />
          </Grid>
          <TradingButton color={"#ff3d00"} name={"sell"} />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default TradingGrid;
