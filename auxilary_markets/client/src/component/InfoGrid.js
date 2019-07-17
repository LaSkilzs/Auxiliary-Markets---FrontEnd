import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TabButton from "../component/TabButton";

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
                {header}
                {props.showButton ? (
                  <Grid
                    container
                    spacing={1}
                    className={classes.innerContainer}
                  >
                    {props.buttonData.map(name => {
                      return (
                        <Grid item md={4} key={name}>
                          <TabButton name={name} />
                        </Grid>
                      );
                    })}
                  </Grid>
                ) : null}
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </React.Fragment>
  );
};

export default InfoGrid;
