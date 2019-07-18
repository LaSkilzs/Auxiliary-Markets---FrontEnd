import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import AdminForm from "../component/AdminForm";

const useStyles = makeStyles(theme => ({
  grid: {
    marginTop: 30,
    marginLeft: 200,
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

const ExchangeManagement = props => {
  const classes = useStyles();
  return (
    <div>
      <Typography
        variant="h3"
        style={{ marginTop: 150, textAlign: "left", marginLeft: 260 }}
      >
        Update Exchange
      </Typography>

      <Grid container spacing={2} className={classes.grid2}>
        <Grid item md={12}>
          <Paper className={classes.paper2}>
            <h2>Add Token to the Exchange</h2>
            <AdminForm btnName={"add token to exchange"} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default ExchangeManagement;
