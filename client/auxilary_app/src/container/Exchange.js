import React from "react";
import MarketTable from "../component/MarketTable";
import InfoGrid from "../component/InfoGrid";
import API from "../API";

class Exchange extends React.Component {
  constructor() {
    super();
    this.state = { currencies: [] };
  }
  async componentDidMount() {
    API.getCurrencies().then(data => {
      this.setState({ currencies: data });
      console.log(data);
    });
  }
  render() {
    return (
      <React.Fragment>
        <InfoGrid />
        <MarketTable currency={this.state.currencies} />
      </React.Fragment>
    );
  }
}

export default Exchange;
