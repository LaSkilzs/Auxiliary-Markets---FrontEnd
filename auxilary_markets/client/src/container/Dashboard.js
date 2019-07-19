import React from "react";
import { Route, Switch } from "react-router-dom";
import SideNav from "../component/SideNav";
import MainGrid from "../component/MainGrid";
import Exchange from "./Exchange";
import NewOrder from "./NewOrder";
import MoneyMarket from "./MoneyMarket";
import Watchlist from "./Watchlist";
import News from "./News";
import Admin from "./Admin";
import Portfolio from "./Portfolio";
import TokenExchange from "./TokenExchange";
import Wallet from "./Wallet";
import TokenManagement from "./TokenManagement";
import ExchangeManagement from "./ExchangeManagement";
import NewAsset from "./NewAsset";
import NewExchangeAccount from "./NewExchangeAccount";

class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <SideNav />
        <Switch>
          <Route path="/home" component={MainGrid} />
          <Route path="/exchange" component={Exchange} />
          <Route
            path="/wallet"
            render={routerProps => (
              <Wallet userInfo={this.props} {...routerProps} />
            )}
          />
          <Route path="/money_market" component={MoneyMarket} />
          <Route path="/token_exchange" component={TokenExchange} />
          <Route path="/token_management" component={TokenManagement} />
          <Route path="/new_order" component={NewOrder} />
          <Route path="/news" component={News} />
          <Route path="/watchlist" component={Watchlist} />
          <Route path="/portfolio" component={Portfolio} />
          <Route
            path="/admin"
            render={routerProps => (
              <Admin userInfo={this.props} {...routerProps} />
            )}
          />
          <Route path="/exchange_management" component={ExchangeManagement} />
          <Route path="/new_asset" component={NewAsset} />
          <Route path="/new_account" component={NewExchangeAccount} />
        </Switch>
      </React.Fragment>
    );
  }
}
export default Dashboard;
