import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FilledInput from "@material-ui/core/FilledInput";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 300
  }
}));

const ExchangeSelect = props => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <FormControl variant="filled" className={classes.formControl}>
        <InputLabel>Currency</InputLabel>
        <Select native input={<FilledInput name="Exchange" />}>
          <option value="" />
          <option value={0}>Ether</option>
          <option value={1}>Zap</option>
          <option value={2}>ZapWei</option>
        </Select>
      </FormControl>
    </React.Fragment>
  );
};

export default ExchangeSelect;
