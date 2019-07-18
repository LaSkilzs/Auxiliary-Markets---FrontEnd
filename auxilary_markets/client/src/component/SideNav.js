import React from "react";
import { Drawer, makeStyles } from "@material-ui/core";
import List from "./SimpleList";
import { Link } from "react-router-dom";

const sideLinks = [
  [<Link to="/home">Home</Link>, "home"],
  [<Link to="/exchange">Exchange</Link>, "money"],
  [<Link to="/wallet">Wallet</Link>, "account_balance_wallet"],
  [<Link to="withdraw">Withdraw</Link>, "card_giftcard"],
  [<Link to="/deposit">Deposit</Link>, "payment"],
  [<Link to="/trading">Trading</Link>, "euro_symbol"],
  [<Link to="news">News</Link>, "web"],
  [<Link to="/watchlist">Watchlist</Link>, "format_list_numbered"],
  [<Link to="portfolio">Portfolio</Link>, "work"],
  [<Link to="/admin">Admin</Link>, "business_center"]
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
