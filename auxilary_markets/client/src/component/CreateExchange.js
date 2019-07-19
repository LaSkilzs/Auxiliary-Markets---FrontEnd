import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";
import green from "@material-ui/core/colors/green";

const primary = green[600];

const useStyles = makeStyles(theme => ({
  root: {},
  paper: {
    marginTop: 80,
    height: "55rem"
  },
  button: {
    background: primary
  }
}));

const CreateExchange = props => {
  const classes = useStyles();
  return (
    <Grid container spacing={3} className={classes.root}>
      <Paper className={classes.paper}>
        <Typography
          variant={"h4"}
          component={"h4"}
          style={{ padding: "5rem", margin: "auto", marginTop: 20 }}
        >
          Create New Exchange Account
        </Typography>
        <form noValidate autoComplete="off" style={{ marginLeft: 280 }}>
          <TextField
            label="name of exchange"
            style={{ margin: 8, width: "50rem" }}
            placeholder="e.g.Cryto Currencies"
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              shrink: true
            }}
          />
          <TextField
            label="Mnemonic Phrase"
            style={{ margin: 8, width: "50rem" }}
            placeholder="e.g.apple run go by the see or elephant moves for free in the tree"
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              shrink: true
            }}
          />
          <TextField
            label="Account Address"
            style={{ margin: 8, width: "50rem" }}
            placeholder="e.g.0x090808498095420542"
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              shrink: true
            }}
          />
          <TextField
            label="email address"
            style={{ margin: 8, width: "50rem" }}
            placeholder="e.g.john@goo.com"
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              shrink: true
            }}
          />
          <TextField
            label="password"
            style={{ margin: 8, width: "50rem" }}
            placeholder="password"
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              shrink: true
            }}
          />

          <Button
            variant="contained"
            size="large"
            color={props.color}
            style={{ width: "50rem", marginTop: 30 }}
            className={classes.button}
          >
            Create Exchange
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};

export default CreateExchange;
