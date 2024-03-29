import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Form from "./Form";
import OrderBook from "../component/OrderBook";

const useStyles = makeStyles(theme => ({
  grid: {
    marginTop: 50,
    marginLeft: 280,
    width: "80rem"
  },
  grid1: {
    marginTop: 20,
    marginLeft: 280,
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
    height: "23rem"
  },
  paper1: {
    height: "8rem"
  },
  moneyContainer: {
    marginTop: 60,
    padding: "1.3rem"
  },
  moneyContainer2: {
    padding: "1.3rem"
  }
}));

const NewOrder = props => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Typography
        variant="h3"
        style={{ marginTop: 150, marginLeft: 280, textAlign: "left" }}
      >
        New Order
      </Typography>
      <Grid container spacing={2} className={classes.grid}>
        <Grid item md={6}>
          <Paper className={classes.paper}>
            <h2>Buy Token</h2>
            <Form btnName={"Buy Token"} />
          </Paper>
        </Grid>
        <Grid item md={6}>
          <Paper className={classes.paper}>
            <h2>Sell Token</h2>
            <Form btnName={"Sell Token"} />
          </Paper>
        </Grid>
      </Grid>
      <Typography
        variant="h4"
        style={{ marginTop: 20, textAlign: "left", marginLeft: 280 }}
      >
        OrderBook
      </Typography>
      <Grid container spacing={2} className={classes.grid1}>
        <Grid item md={6}>
          <Paper className={classes.paper1}>
            <OrderBook name="Bid" />
          </Paper>
        </Grid>
        <Grid item md={6}>
          <Paper className={classes.paper1}>
            <OrderBook name="Ask" />
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default NewOrder;
