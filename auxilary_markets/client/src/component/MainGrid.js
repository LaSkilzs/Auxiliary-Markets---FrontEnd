import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import blockchain from "../blockchain.jpg";
import LoginForm from "./LoginForm";
import SignUp from "./SignUp";

const useStyles = makeStyles(theme => ({
  grid: {
    marginLeft: 255,
    width: "84rem"
  },
  paper: {
    marginTop: 100,
    margin: "auto",
    height: "50rem"
  },
  img: {
    backgroundSize: "cover",
    width: "43rem",
    height: "50rem"
  }
}));

const MainGrid = props => {
  const classes = useStyles();
  return (
    <Grid container className={classes.grid}>
      <Grid item lg={6}>
        <Paper className={classes.paper}>
          {props.showSignUp ? (
            <SignUp />
          ) : (
            <LoginForm handleSignup={props.handleSignup} />
          )}
        </Paper>
      </Grid>
      <Grid item lg={6}>
        <Paper className={classes.paper}>
          <img src={blockchain} alt={blockchain} className={classes.img} />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default MainGrid;
