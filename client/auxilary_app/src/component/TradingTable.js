import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Textfield from "./Textfield";

const useStyles = makeStyles(() => ({
  root: {
    width: "30rem",
    margin: "auto"
  },
  table: {
    width: "30rem"
  }
}));

const TradingTable = props => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell align="right">cat</TableCell>
              <TableCell align="right">button</TableCell>
              <TableCell align="right">Buy:</TableCell>
              <TableCell align="right">Available:</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="right">Units</TableCell>
              <TableCell>
                <Button variant="contained" size="sm">
                  Max
                </Button>
              </TableCell>
              <TableCell align="right">
                <Textfield />
              </TableCell>
              <TableCell align="right">total</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="right">{props.price}</TableCell>
              <TableCell>
                <Button variant="contained" size="sm">
                  Price
                </Button>
              </TableCell>
              <TableCell align="right">
                <Textfield />
              </TableCell>
              <TableCell align="right">total</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="right">Type</TableCell>
              <TableCell>
                <Button variant="contained" size="sm">
                  Market
                </Button>
              </TableCell>
              <TableCell align="right">
                <Textfield />
              </TableCell>
              <TableCell align="right">total</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="right">Total</TableCell>
              <TableCell>
                <Button variant="contained" size="xs">
                  Total
                </Button>
              </TableCell>
              <TableCell align="right">
                <Textfield />
              </TableCell>
              <TableCell align="right">total</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
    </React.Fragment>
  );
};

export default TradingTable;
