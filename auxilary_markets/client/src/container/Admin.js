import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import red from "@material-ui/core/colors/red";

const primary = red[700];

const useStyles = makeStyles(theme => ({
  grid: {
    marginTop: 100,
    marginLeft: 260,
    width: "80rem"
  },
  subGrid: {
    marginTop: 60,
    marginLeft: 260,
    width: "80rem"
  },
  h1: {
    color: primary
  }
}));
const Admin = props => {
  const classes = useStyles();
  const {
    adminAddress,
    adminWeiBalance,
    adminEthBalance
  } = props.adminInfo.adminInfo;

  return (
    <React.Fragment>
      <Grid container spacing={3} className={classes.grid}>
        <Grid item xs={4}>
          <Paper style={{ height: "10vh" }}>
            <h2 className={classes.h1}>Exchange Token Balance</h2>
            <h4>{adminAddress || 0}</h4>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper style={{ height: "10vh" }}>
            <h2 className={classes.h1}>Exchange Balance in Wei </h2>
            <h4>{adminWeiBalance || 0}</h4>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper style={{ height: "10vh" }}>
            <h2 className={classes.h1}>Exchange Balance in Ether</h2>
            <h4>{adminEthBalance || 0}</h4>
          </Paper>
        </Grid>
        <Grid item xs={9}>
          <Paper style={{ height: "50vh" }}>Exchange Chart</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper style={{ height: "50vh" }}>Recent Activity</Paper>
        </Grid>
      </Grid>
      <div>
        <Grid container spacing={3} className={classes.subGrid}>
          <Grid item xs={6}>
            <Paper style={{ height: "10vh" }}>Exchange Assets</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper style={{ height: "10vh" }}>Top Trades</Paper>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
};

export default Admin;
