import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => {
  // root: {
  // }
});
const TabButton = props => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Button variant="contained" color="primary" className={classes.root}>
        {props.name}
      </Button>
    </React.Fragment>
  );
};

export default TabButton;
