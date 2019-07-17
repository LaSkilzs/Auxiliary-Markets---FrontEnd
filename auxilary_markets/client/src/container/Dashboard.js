import React from "react";
import { Route, Switch } from "react-router-dom";
import SideNav from "../component/SideNav";
import MainGrid from "../component/MainGrid";
import Exchange from "./Exchange";
import Trading from "./Trading";
import Wallet from "./Wallet";
import Watchlist from "./Watchlist";

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
          <Route
            path="/exchange"
            render={routerProps => (
              <Exchange userInfo={this.props} {...routerProps} />
            )}
          />
          <Route path="/trading" component={Trading} />
          <Route path="/wallet" component={Wallet} />
          <Route path="/watchlist" component={Watchlist} />
        </Switch>
      </React.Fragment>
    );
  }
}
export default Dashboard;
