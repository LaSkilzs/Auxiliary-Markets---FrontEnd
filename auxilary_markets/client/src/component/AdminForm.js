import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const AdminForm = props => {
  return (
    <div>
      <form noValidate autoComplete="off">
        <TextField
          style={{ margin: 8, width: "35rem" }}
          placeholder="Name of Token"
          margin="normal"
          variant="outlined"
          fullWidth
        />
        <TextField
          style={{ margin: 8, width: "35rem" }}
          placeholder="Address of Token"
          margin="normal"
          variant="outlined"
          fullWidth
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

export default AdminForm;
