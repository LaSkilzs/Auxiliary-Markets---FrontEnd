import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  grid: {
    marginTop: 100,
    marginLeft: 200,
    width: "80rem"
  },
  subGrid: {
    marginTop: 60,
    marginLeft: 200,
    width: "80rem"
  }
}));

const InfoGrid = props => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid container spacing={3} className={classes.grid}>
        <Grid item xs={3}>
          <Paper style={{ height: "10vh" }}>CryptoCurrency</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper style={{ height: "10vh" }}>Equities</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper style={{ height: "10vh" }}>Futures</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper style={{ height: "10vh" }}>Currency</Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default InfoGrid;
