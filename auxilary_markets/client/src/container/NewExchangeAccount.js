import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 200
  }
}));

const NewExchangeAccount = props => {
  const classes = useStyles();
  return (
    <div>
      <h1 className={classes.root}>New Exchange Account</h1>
    </div>
  );
};

export default NewExchangeAccount;
