import React from "react";
import { Drawer, makeStyles } from "@material-ui/core";
import List from "./SimpleList";
import { Link } from "react-router-dom";

const sideLinks = [
  [<Link to="/home">Home</Link>, "home"],
  [<Link to="/exchange">Exchange</Link>, "store"],
  [<Link to="/wallet">Wallet</Link>, "account_balance_wallet"],
  [<Link to="/money_market">Money Market</Link>, "money"],
  [<Link to="/token_exchange">Token Exchange</Link>, "monetization_on"],
  [<Link to="/token_management">Token Management</Link>, "euro_symbol"],
  [<Link to="/new_order">New Order</Link>, "receipt"],
  [<Link to="/news">News</Link>, "web"],
  [<Link to="/watchlist">Watchlist</Link>, "format_list_numbered"],
  [<Link to="/portfolio">Portfolio</Link>, "pie_chart"],
  [<Link to="/admin">Admin</Link>, "business_center"],
  [<Link to="/exchange_management">Exchange Management</Link>, "dashboard"],
  [<Link to="/new_asset">New Asset</Link>, "web_asset"],
  [<Link to="/new_account">New Account</Link>, "account_box"]
];

const drawerWidth = 300;

const useStyles = makeStyles(theme => ({
  drawer: {
    width: drawerWidth
  }
}));

const SideNav = () => {
  const classes = useStyles();

  return (
    <div>
      <Drawer variant="permanent" className={classes.drawer}>
        <List items={sideLinks} />
      </Drawer>
    </div>
  );
};

export default SideNav;
