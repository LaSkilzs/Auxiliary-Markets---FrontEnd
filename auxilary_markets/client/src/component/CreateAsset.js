import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";
import green from "@material-ui/core/colors/green";

class CreateAsset extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      symbol: "",
      name: "",
      total_supply: 0,
      market_cap: 0,
      circulating: 0,
      highest: 0,
      price: 0,
      units: 0
    };
  }

  handleSubmit = () => {
    const token = this.state;
    console.log(token);
    // Contract Call to Store Data
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const primary = green[600];
    return (
      <Grid container spacing={3} style={{ marginLeft: 100 }}>
        <Paper style={{ marginTop: 100, height: "55rem" }}>
          <Typography
            variant={"h4"}
            component={"h4"}
            style={{ padding: "5rem", margin: "auto", marginTop: 20 }}
          >
            Create New Token
          </Typography>
          <form noValidate autoComplete="off">
            <TextField
              label="Symbol"
              style={{ margin: 8, width: "35rem" }}
              placeholder="e.g.BTC"
              margin="normal"
              variant="outlined"
              name={"symbol"}
              value={this.state.symbol}
              onChange={e => this.handleChange(e)}
              InputLabelProps={{
                shrink: true
              }}
            />
            <TextField
              label="Asset Name"
              style={{ margin: 8, width: "35rem" }}
              placeholder="e.g.Bitcoin"
              margin="normal"
              variant="outlined"
              name={"name"}
              value={this.state.name}
              onChange={e => this.handleChange(e)}
              InputLabelProps={{
                shrink: true
              }}
            />
            <TextField
              label="Units/Tokens"
              style={{ margin: 8, width: "35rem" }}
              placeholder="e.g.10"
              margin="normal"
              variant="outlined"
              name={"units"}
              value={this.state.units}
              onChange={e => this.handleChange(e)}
              InputLabelProps={{
                shrink: true
              }}
            />
            <TextField
              label="Market Capitalization"
              style={{ margin: 8, width: "35rem" }}
              placeholder="e.g.23748404845"
              margin="normal"
              variant="outlined"
              name={"market_cap"}
              value={this.state.market_cap}
              onChange={e => this.handleChange(e)}
              InputLabelProps={{
                shrink: true
              }}
            />
            <TextField
              label="Total Supply"
              style={{ margin: 8, width: "35rem" }}
              placeholder="e.g.10000000"
              margin="normal"
              variant="outlined"
              name={"total_supply"}
              value={this.state.total_supply}
              onChange={e => this.handleChange(e)}
              InputLabelProps={{
                shrink: true
              }}
            />
            <TextField
              label="Circulating_Supply"
              style={{ margin: 8, width: "35rem" }}
              placeholder="e.g.25000"
              margin="normal"
              variant="outlined"
              name={"circulating"}
              value={this.state.circulating}
              onChange={e => this.handleChange(e)}
              InputLabelProps={{
                shrink: true
              }}
            />
            <TextField
              label="Highest Price"
              style={{ margin: 8, width: "35rem" }}
              placeholder="e.g.25.00"
              margin="normal"
              variant="outlined"
              name={"highest"}
              value={this.state.highest}
              onChange={e => this.handleChange(e)}
              InputLabelProps={{
                shrink: true
              }}
            />
            <TextField
              label="Price"
              style={{ margin: 8, width: "35rem" }}
              placeholder="e.g.20.00"
              margin="normal"
              variant="outlined"
              name={"price"}
              value={this.state.price}
              onChange={e => this.handleChange(e)}
              InputLabelProps={{
                shrink: true
              }}
            />
            <Grid item lg={6} style={{ marginLeft: 280, margin: "auto" }}>
              <Button
                variant="contained"
                size="large"
                onClick={() => this.handleSubmit()}
                style={{
                  width: "35rem",
                  marginTop: 30,
                  background: primary
                }}
              >
                Create Asset Token
              </Button>
            </Grid>
          </form>
        </Paper>
      </Grid>
    );
  }
}

export default CreateAsset;
