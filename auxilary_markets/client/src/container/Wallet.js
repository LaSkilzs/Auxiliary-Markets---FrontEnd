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
  }
}));
const Wallet = props => {
  const classes = useStyles();
  const { address, weiBalance, ethBalance } = props.userInfo.userInfo;

  return (
    <React.Fragment>
      <Grid container spacing={3} className={classes.grid}>
        <Grid item xs={4}>
          <Paper style={{ height: "10vh" }}>
            <div>
              <h2 style={{ color: primary }}>Account</h2>
              <h4>{address || 0}</h4>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper style={{ height: "10vh" }}>
            <h2 style={{ color: primary }}>Balance in Wei </h2>
            <h4>{weiBalance || 0}</h4>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper style={{ height: "10vh" }}>
            <h2 style={{ color: primary }}>Balance in Ether</h2>
            <h4>{ethBalance || 0}</h4>
          </Paper>
        </Grid>
        <Grid item xs={9}>
          <Paper style={{ height: "50vh" }}>Zap Chart</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper style={{ height: "50vh" }}>Profile Card</Paper>
        </Grid>
      </Grid>
      <div>
        <Grid container spacing={3} className={classes.subGrid}>
          <Grid item xs={6}>
            <Paper style={{ height: "10vh" }}>Recent Activity</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper style={{ height: "10vh" }}>Top Trades</Paper>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
};

export default Wallet;
