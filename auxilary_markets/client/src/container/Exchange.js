import React from "react";
import MarketTable from "../component/MarketTable";
import InfoGrid from "../component/InfoGrid";
import Loading from "../component/Loading";
import API from "../API";

class Exchange extends React.Component {
  constructor() {
    super();
    this.state = { currencies: [], showButton: true, loading: false };
  }
  async componentDidMount() {
    API.getCurrencies().then(data => {
      this.setState({ currencies: data, loading: true });
      console.log(data);
    });
  }
  render() {
    const displayTabs = [
      "Currency",
      "Equites & Options",
      "Futures",
      "Foreign Exchange"
    ];

    const buttonData = ["trade", "watchlist"];
    return (
      <React.Fragment>
        <InfoGrid
          tabs={displayTabs}
          buttonData={buttonData}
          showButton={this.state.showButton}
        />
        {this.state.loading ? (
          <MarketTable currency={this.state.currencies} />
        ) : (
          <Loading />
        )}
      </React.Fragment>
    );
  }
}

export default Exchange;
