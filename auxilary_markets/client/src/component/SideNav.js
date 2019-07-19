import React from "react";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { Drawer } from "@material-ui/core";
import List from "./SimpleList";
import { Link } from "react-router-dom";
import blueGrey from "@material-ui/core/colors/blueGrey";
import "../container/css/sidenav.css";

const sideLinks = [
  [
    <Link to="/home" style={{ color: "white" }}>
      Home
    </Link>,
    "home"
  ],
  [
    <Link to="/exchange" style={{ color: "white" }}>
      Exchange
    </Link>,
    "store"
  ],
  [
    <Link to="/wallet" style={{ color: "white" }}>
      Wallet
    </Link>,
    "account_balance_wallet"
  ],
  [
    <Link to="/money_market" style={{ color: "white" }}>
      Money Market
    </Link>,
    "money"
  ],
  [
    <Link to="/token_exchange" style={{ color: "white" }}>
      Token Exchange
    </Link>,
    "monetization_on"
  ],
  [
    <Link to="/token_management" style={{ color: "white" }}>
      Token Management
    </Link>,
    "euro_symbol"
  ],
  [
    <Link to="/new_order" style={{ color: "white" }}>
      New Order
    </Link>,
    "receipt"
  ],
  [
    <Link to="/news" style={{ color: "white" }}>
      News
    </Link>,
    "web"
  ],
  [
    <Link to="/watchlist" style={{ color: "white" }}>
      Watchlist
    </Link>,
    "format_list_numbered"
  ],
  [
    <Link to="/portfolio" style={{ color: "white" }}>
      Portfolio
    </Link>,
    "pie_chart"
  ],
  [
    <Link to="/admin" style={{ color: "white" }}>
      Admin
    </Link>,
    "business_center"
  ],
  [
    <Link to="/exchange_management" style={{ color: "white" }}>
      Exchange Management
    </Link>,
    "dashboard"
  ],
  [
    <Link to="/new_asset" style={{ color: "white" }}>
      New Asset
    </Link>,
    "web_asset"
  ],
  [
    <Link to="/new_account" style={{ color: "white" }}>
      New Account
    </Link>,
    "account_box"
  ]
];

const drawerWidth = 260;
const primary = blueGrey[900];

const theme = createMuiTheme({
  overrides: {
    MuiDrawer: {
      paper: {
        width: drawerWidth,
        backgroundColor: primary
      }
    }
  }
});

const SideNav = props => {
  return (
    <MuiThemeProvider theme={theme}>
      <Drawer variant="permanent">
        <List items={sideLinks} />
      </Drawer>
    </MuiThemeProvider>
  );
};

export default SideNav;
