import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import ExchangeSelect from "./ExchangeSelect";
import ExchangeInput from "./ExchangeInput";
import Divider from "@material-ui/core/Divider";
import red from "@material-ui/core/colors/red";
import { Typography } from "@material-ui/core";

const primary = red[700];

const useStyles = makeStyles(theme => ({
  grid: {
    marginTop: 50,
    marginLeft: 260,
    width: "80rem"
  },
  subGrid: {
    marginTop: 60,
    marginLeft: 260,
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
const ExchangeGrid = props => {
  const classes = useStyles();
  return (
    <Grid container spacing={2} className={classes.grid}>
      <Grid item md={6}>
        <Paper className={classes.paper}>
          <Typography variant={"h4"} style={{ color: primary, padding: 20 }}>
            Exchange
          </Typography>
          <ExchangeSelect />
          <Grid container className={classes.moneyContainer}>
            <Grid item md={6}>
              <span>Price</span>
            </Grid>
            <Grid item md={6}>
              <span>Name</span>
            </Grid>
          </Grid>
          <Divider variant="middle" />
          <ExchangeInput title={"You are exchanging"} />
        </Paper>
      </Grid>
      <Grid item md={6}>
        <Paper className={classes.paper}>
          <Typography variant={"h4"} style={{ color: primary, padding: 20 }}>
            Receive
          </Typography>

          <ExchangeSelect />
          <Grid container className={classes.moneyContainer}>
            <Grid item md={6}>
              <span>Price</span>
            </Grid>
            <Grid item md={6}>
              <span>Name</span>
            </Grid>
          </Grid>
          <Divider variant="middle" />
          <ExchangeInput title={"You are recieving"} />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default ExchangeGrid;
