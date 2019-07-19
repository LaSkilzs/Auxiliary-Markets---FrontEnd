import React from "react";
import MarketTable from "../component/MarketTable";
import InfoGrid from "../component/InfoGrid";
import Loading from "../component/Loading";
import API from "../API";
import SearchBox from "../component/SearchBox";
import ExchangeWelcome from "../component/ExchangeWelcome";

class Exchange extends React.Component {
  constructor() {
    super();
    this.state = {
      currencies: [],
      showButton: true,
      loading: false,
      showData: false
    };
  }
  async componentDidMount() {
    // API.getCurrencies().then(data => {
    //   this.setState({ currencies: data, showData: !this.state.showData, loading: false });
    //   console.log(data);
    // });
  }

  handleClick = () => this.setState({ loading: !this.state.loading });

  render() {
    console.log(this.state.currencies);
    console.log(this.state.loading);
    const buttonData = [
      "Crypto-Currency",
      "Equites & Options",
      "Futures",
      "Foreign Exchange"
    ];
    return (
      <React.Fragment>
        <InfoGrid
          tabs={buttonData}
          showButton={this.state.showButton}
          handleClick={this.handleClick}
        />
        <SearchBox />
        {this.state.loading ? <Loading /> : <ExchangeWelcome />}
        {this.state.showData && this.state.currencies !== [] ? (
          <MarketTable currency={this.state.currencies} />
        ) : null}
      </React.Fragment>
    );
  }
}

export default Exchange;
