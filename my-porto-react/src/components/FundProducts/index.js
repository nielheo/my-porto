import React, { Component } from "react";

import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';

import { withRouter } from "react-router-dom"

import FundProductList from './FundProductList'
import CustomTableCell from '../CustomTableCell'
import AddFundProductRow from "./AddFundProductRow";

class FundProducts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      codeInEdit: null,
      addingMode: false,
    }
  }

  _addProductClicked = () => {
    this.setState({
      codeInEdit: null,
      addingMode: true,
    });
  }

  _onEditClicked = (code) => {
    this.setState({
      codeInEdit: code,
      addingMode: false,
    });
  }

  _onCancelEditClicked = () => {
    this.setState({
      codeInEdit: null,
      addingMode: false,
    })
  }

  render () {
    const { classes } = this.props;
  
    return (
      <section>
        <Button color="primary" className={classes.button} 
          onClick={this._addProductClicked}
          disabled={this.state.addingMode}
          >
          Add Product
        </Button>
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <CustomTableCell>Code</CustomTableCell>
                <CustomTableCell>Name</CustomTableCell>
                <CustomTableCell>Type</CustomTableCell>
                <CustomTableCell></CustomTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              { this.state.addingMode && <AddFundProductRow onCancelClicked={this._onCancelEditClicked}/> }
              <FundProductList classes={classes} {...this.state} 
                onEditClicked={this._onEditClicked} 
                onCancelEditClicked={this._onCancelEditClicked}
              />
            </TableBody>
          </Table>
        </Paper>
      
      </section>
    )
  }
}

FundProducts.propTypes = {
  classes: PropTypes.object.isRequired,
};

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  button: {
    margin: theme.spacing.unit,
  },
});

export default withRouter(withStyles(styles)(FundProducts));