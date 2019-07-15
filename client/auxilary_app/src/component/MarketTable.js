import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import PropTypes from "prop-types";

const MarketTable = props => {
  console.log(props);
  const useStyles = makeStyles(() => ({
    root: {
      marginTop: 50,
      marginLeft: 200,
      width: "80rem"
    },
    table: {
      maxWidth: "75rem"
    }
  }));
  const classes = useStyles();

  return (
    <React.Fragment>
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell align="right">Id</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">MarketCap</TableCell>
              <TableCell align="right">Circulating supply</TableCell>
              <TableCell align="right">max supply</TableCell>
              <TableCell align="right">High</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Price Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.currency.map(currencies => {
              console.log(currencies);
              return (
                <TableRow key={currencies.id}>
                  <TableCell align="right">{currencies.id}</TableCell>
                  <TableCell align="right">{currencies.name}</TableCell>
                  <TableCell align="right">{currencies.market_cap}</TableCell>
                  <TableCell align="right">{currencies.high}</TableCell>
                  <TableCell align="right">{currencies.max_supply}</TableCell>
                  <TableCell align="right">
                    {currencies.circulating_supply}
                  </TableCell>
                  <TableCell align="right">{currencies.price}</TableCell>
                  <TableCell align="right">{currencies.price_date}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    </React.Fragment>
  );
};

export default MarketTable;

MarketTable.defaultProps = {
  currency: []
};
MarketTable.propTypes = {
  currency: PropTypes.array
};
