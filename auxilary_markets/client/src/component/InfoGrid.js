import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TabButton from "../component/TabButton";

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
  innerContainer: {
    marginTop: 10
  }
}));

const InfoGrid = props => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid container spacing={3} className={classes.grid}>
        {props.tabs.map(header => {
          return (
            <Grid item xs={3} key={header}>
              <Paper style={{ height: "10vh" }}>
                {props.showButton ? (
                  <Grid
                    container
                    spacing={1}
                    className={classes.innerContainer}
                  >
                    <Grid item md={4}>
                      <TabButton
                        name={header}
                        color={"secondary"}
                        handleClick={props.handleClick}
                      />
                    </Grid>
                  </Grid>
                ) : (
                  <div>
                    <h3>{header} Amount:</h3>
                    <h1>{props.amount || 0}</h1>
                  </div>
                )}
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </React.Fragment>
  );
};

export default InfoGrid;
