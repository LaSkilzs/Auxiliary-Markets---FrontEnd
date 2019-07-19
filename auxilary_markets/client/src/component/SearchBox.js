import React from "react";
import TextField from "@material-ui/core/TextField";

class SearchBox extends React.Component {
  constructor() {
    super();
    this.state = {
      search: ""
    };
  }

  handleSearch = word => this.setState({ search: word });
  handleEnter = enter => {
    if (enter === "Enter") {
      this.handleSubmit();
      this.setState({ search: "" });
    }
  };
  handleSubmit = () => {
    const search = this.state;
    console.log(search);
    // Info for seach contract
  };
  render() {
    return (
      <React.Fragment>
        <TextField
          style={{
            width: "50rem",
            margin: "auto",
            fontSize: "1.3rem",
            marginTop: "3rem",
            marginLeft: 280
          }}
          label="Search for Asset by Name or Symbol"
          margin="normal"
          variant="outlined"
          name={"search"}
          value={this.state.search}
          onKeyPress={e => this.handleEnter(e.key)}
          onChange={e => this.handleSearch(e.target.value)}
          fullWidth
        />
      </React.Fragment>
    );
  }
}

export default SearchBox;
