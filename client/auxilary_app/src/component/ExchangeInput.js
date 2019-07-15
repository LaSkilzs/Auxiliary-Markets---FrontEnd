import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";
import BootstrapInput from "./BootstrapInput";

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  }
}));
const ExchangeInput = props => {
  const classes = useStyles();
  const { title } = props;
  return (
    <React.Fragment>
      <FormControl className={classes.margin}>
        <InputLabel htmlFor="confirmation">{title}</InputLabel>
        <BootstrapInput title={props.title} />
      </FormControl>
    </React.Fragment>
  );
};

export default ExchangeInput;
