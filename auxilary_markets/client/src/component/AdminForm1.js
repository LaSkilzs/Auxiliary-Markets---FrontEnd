import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const AdminForm1 = props => {
  return (
    <div>
      <form noValidate autoComplete="off">
        <TextField
          style={{ margin: 8, width: "35rem" }}
          placeholder="Amount in Token"
          margin="normal"
          variant="outlined"
        />
        <TextField
          style={{ margin: 8, width: "35rem" }}
          placeholder="To(address)"
          margin="normal"
          variant="outlined"
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
    </div>
  );
};

export default AdminForm1;
