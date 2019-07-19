import React from "react";
import { Typography } from "@material-ui/core";
import CreateAsset from "../component/CreateAsset";

const NewAsset = props => {
  return (
    <React.Fragment>
      <Typography
        variant="h3"
        style={{
          marginTop: 150,
          marginBottom: 100,
          marginLeft: 260,
          textAlign: "left"
        }}
      >
        Create AssetToken
      </Typography>
      <CreateAsset />
    </React.Fragment>
  );
};

export default NewAsset;
