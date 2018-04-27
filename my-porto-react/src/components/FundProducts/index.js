import React from "react";

import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';

import { Query } from "react-apollo";
import gql from "graphql-tag";

const FundProductList = (classes) => (
  <Query
    query={gql`
      {
        fundProducts {
          code
          name
          fundType {
            name
          }
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return data.fundProducts.map(({ code, name, fundType }) => (
        <TableRow className={classes.row} key={code}>
          <CustomTableCell>{code}</CustomTableCell>
          <CustomTableCell>{name}</CustomTableCell>
          <CustomTableCell>{fundType.name}</CustomTableCell>
        </TableRow>
      ));
    }}
  </Query>
);

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});

const FundProducts = (props) => {
  const { classes } = props;
  
  return (
  <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <CustomTableCell>Code</CustomTableCell>
            <CustomTableCell>Name</CustomTableCell>
            <CustomTableCell>Type</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <FundProductList classes={classes}/>
        </TableBody>
      </Table>
    </Paper>
)}

FundProducts.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FundProducts);