import React from "react";

import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Select from 'material-ui/Select';
import { MenuItem } from 'material-ui/Menu';

import { Query } from "react-apollo";
import gql from "graphql-tag";
import { withRouter } from "react-router-dom"

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
      if (loading) return <div>Loading...</div>;
      if (error) return <div>Error :(</div>;

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
    //backgroundColor: theme.palette.common.black,
    //color: theme.palette.common.white,
    fontWeight: 'bold',
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
  button: {
    margin: theme.spacing.unit,
  },
});

const addProductClicked = () => {
  console.log('Add Product clicked');
}


const FundProducts = (props) => {
  
  const { classes } = props;
  
  return (
    <section>
    <Button color="primary" className={classes.button} 
      onClick={(() =>props.history.push('/fundproducts/add'))}>
      Add Product
    </Button>
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
          <TableRow className={classes.row}>
            <CustomTableCell><TextField
      hintText="Hint Text"
    /></CustomTableCell>
            <CustomTableCell><TextField
      hintText="Hint Text"
    /></CustomTableCell>
            <CustomTableCell><Select
            value={10}
           
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select></CustomTableCell>
        </TableRow>
        </TableBody>
      </Table>
    </Paper>
    
    </section>
)}

FundProducts.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(FundProducts));