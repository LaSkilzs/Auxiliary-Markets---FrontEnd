import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const Form = props => {
  return (
    <form noValidate autoComplete="off">
      <TextField
        label="Symbol Name"
        style={{ margin: 8, width: "35rem" }}
        placeholder="e.g.BTC"
        margin="normal"
        variant="outlined"
        InputLabelProps={{
          shrink: true
        }}
      />
      <TextField
        label="Amount In Tokens"
        style={{ margin: 8, width: "35rem" }}
        placeholder="e.g.95"
        margin="normal"
        variant="outlined"
        InputLabelProps={{
          shrink: true
        }}
      />
      <TextField
        label="Price In Wei"
        style={{ margin: 8, width: "35rem" }}
        placeholder="e.g.95000000"
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
        style={{ width: "35rem" }}
      >
        {props.btnName}
      </Button>
    </form>
  );
};

export default Form;
