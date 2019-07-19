import React from "react";
import TextField from "@material-ui/core/TextField";

const OrderBook = props => {
  return (
    <div>
      <form noValidate autoComplete="off">
        <TextField
          label={props.name}
          style={{ margin: 8, width: "35rem" }}
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true
          }}
        />
      </form>
    </div>
  );
};

export default OrderBook;
