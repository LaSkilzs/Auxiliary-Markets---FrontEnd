import React from "react";
import { Route, Switch } from "react-router-dom";
import SideNav from "../component/SideNav";
import MainGrid from "../component/MainGrid";
import Exchange from "./Exchange";
import Trading from "./Trading";
import Wallet from "./Wallet";
import Watchlist from "./Watchlist";
import News from "./News";
import Admin from "./Admin";
import Portfolio from "./Portfolio";
import Deposit from "./Deposit";
import Withdraw from "./Withdraw";

class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    console.log(this.props);
    return (
      <React.Fragment>
        <SideNav />
        <Switch>
          <Route
            path="/home"
            render={routerProps => (
              <MainGrid userInfo={this.props} {...routerProps} />
            )}
          />
          <Route path="/exchange" component={Exchange} />
          <Route path="/trading" component={Trading} />
          <Route path="/wallet" component={Wallet} />
          <Route path="/watchlist" component={Watchlist} />
          <Route path="/withdraw" component={Withdraw} />
          <Route path="/deposit" component={Deposit} />
          <Route path="/news" component={News} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/admin" component={Admin} />
        </Switch>
      </React.Fragment>
    );
  }
}
export default Dashboard;
