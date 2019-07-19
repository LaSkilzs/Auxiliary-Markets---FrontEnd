import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const WDForm1 = props => {
  return (
    <React.Fragment>
      <form noValidate autoComplete="off">
        <TextField
          label="Amount In Ether"
          style={{ margin: 8, width: "35rem" }}
          placeholder="e.g.95"
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
    </React.Fragment>
  );
};

export default WDForm1;
