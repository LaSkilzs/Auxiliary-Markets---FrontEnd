import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import AdminForm1 from "../component/AdminForm1";

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
const TokenManagement = () => {
  const classes = useStyles();
  return (
    <div>
      <Typography
        variant="h3"
        style={{ marginTop: 150, textAlign: "left", marginLeft: 260 }}
      >
        Manage Token
      </Typography>
      <Grid container spacing={2} className={classes.grid}>
        <Grid item md={6}>
          <Paper className={classes.paper}>
            <h2>Send Token</h2>
            <AdminForm1 btnName={"send token"} />
          </Paper>
        </Grid>
        <Grid item md={6}>
          <Paper className={classes.paper}>
            <h2>Approve Token Allowance</h2>
            <AdminForm1 btnName={"approve token allowance"} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default TokenManagement;
