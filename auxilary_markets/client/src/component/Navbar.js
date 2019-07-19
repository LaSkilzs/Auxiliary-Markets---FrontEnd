import React from "react";
import { AppBar, makeStyles, Typography } from "@material-ui/core";
import blueGrey from "@material-ui/core/colors/blueGrey";
import "../container/css/sidenav.css";

const drawerWidth = 260;
const primary = blueGrey[900];

const useStyles = makeStyles(theme => ({
  navbar: {
    background: primary,
    position: "fixed",
    width: `calc(100% - ${drawerWidth}px)`,
    padding: "1.3rem"
  },
  title: {
    display: "flex",
    fontSize: "2.3rem",
    fontStyle: "italic"
  },
  header: {
    display: "flex",
    justifyContent: "space between",
    padding: "0.5rem"
  },
  icons: {
    marginLeft: "auto"
  },
  iconRoot: {
    padding: "5px",
    fontSize: "1rem"
  }
}));

const Navbar = props => {
  let classes = useStyles();
  return (
    <div>
      <AppBar className={classes.navbar}>
        <div className={classes.header}>
          <Typography className={classes.title}>
            Crypto Asset Marketplace
          </Typography>
          <div className={classes.icons}>
            <i className="material-icons">email</i>
            <i className="material-icons">notifications</i>
            <i className="material-icons">account_circle</i>
          </div>
        </div>
      </AppBar>
    </div>
  );
};
export default Navbar;
