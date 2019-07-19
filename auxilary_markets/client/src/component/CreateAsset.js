import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    marginLeft: 100
  },
  paper: {
    marginTop: 100,
    height: "55rem"
  }
}));

const CreateAsset = props => {
  const classes = useStyles();
  return (
    <Grid container spacing={3} className={classes.root}>
      <Paper className={classes.paper}>
        <Typography
          variant={"h4"}
          component={"h4"}
          style={{ padding: "5rem", margin: "auto", marginTop: 20 }}
        >
          Create New Asset
        </Typography>
        <form noValidate autoComplete="off">
          <TextField
            label="Symbol"
            style={{ margin: 8, width: "35rem" }}
            placeholder="e.g.BTC"
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              shrink: true
            }}
          />
          <TextField
            label="Asset Name"
            style={{ margin: 8, width: "35rem" }}
            placeholder="e.g.Bitcoin"
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              shrink: true
            }}
          />
          <TextField
            label="Units/Tokens"
            style={{ margin: 8, width: "35rem" }}
            placeholder="e.g.10"
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              shrink: true
            }}
          />
          <TextField
            label="Market Capitalization"
            style={{ margin: 8, width: "35rem" }}
            placeholder="e.g.23748404845"
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              shrink: true
            }}
          />
          <TextField
            label="Total Supply"
            style={{ margin: 8, width: "35rem" }}
            placeholder="e.g.10000000"
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              shrink: true
            }}
          />
          <TextField
            label="Circulating_Supply"
            style={{ margin: 8, width: "35rem" }}
            placeholder="e.g.25000"
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              shrink: true
            }}
          />
          <TextField
            label="Highest Price"
            style={{ margin: 8, width: "35rem" }}
            placeholder="e.g.25.00"
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              shrink: true
            }}
          />
          <TextField
            label="Price"
            style={{ margin: 8, width: "35rem" }}
            placeholder="e.g.20.00"
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
            style={{ width: "35rem", marginTop: 30 }}
          >
            Create Asset Token
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};

export default CreateAsset;
