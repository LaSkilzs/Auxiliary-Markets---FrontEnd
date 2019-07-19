import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    width: "50rem",
    margin: "auto",
    fontSize: "1.3rem",
    marginTop: "3rem",
    marginLeft: 280
  }
}));

const SearchBox = props => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <TextField
        className={classes.root}
        label="Search for Asset By Name"
        margin="normal"
        variant="outlined"
        fullWidth
      />
    </React.Fragment>
  );
};

export default SearchBox;
