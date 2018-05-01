import React, {Component} from 'react';

import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, { TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

import CustomTableCell from '../CustomTableCell';
import TransactionList from './TransactonList';

class Transactions extends Component {
  constructor(props) {
    super(props)
    this.state = {
      transactionIdInEdit: null,
      addingMode: false,
    }
  }
  render() {
    const { classes } = this.props;
    return (
      <section>
        <div className={classes.titleRow}>
          <div className={classes.title}>
            <Typography variant="title" color="inherit" flex="1">
                Transactions
            </Typography>
          </div>
          <div className={classes.titleButton}>
            <Button color="primary" className={classes.button} 
              onClick={this._addProductClicked}
              disabled={this.state.addingMode}
              variant="raised"
              >
              Add Transaction
            </Button>
          </div>
        </div>
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <CustomTableCell>Date</CustomTableCell>
                <CustomTableCell>Reff No</CustomTableCell>
                <CustomTableCell>Product</CustomTableCell>
                <CustomTableCell>Type</CustomTableCell>
                <CustomTableCell numeric>NAV</CustomTableCell>
                <CustomTableCell numeric>Unit</CustomTableCell>
                <CustomTableCell numeric>Cost</CustomTableCell>
                <CustomTableCell numeric>Fee</CustomTableCell>
              </TableRow>
            </TableHead>
            <TransactionList/>
          </Table>
        </Paper>
      </section>
    )
  }
}

Transactions.propTypes = {
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
  titleRow: {
    display: 'flex',
  },
  title: {
    marginTop: '12px',
    marginLeft: '12px',
    flex: 1,
  },
  titleButton: {
    justifyContent: 'flex-end',
  },
  button: {
    margin: theme.spacing.unit,
  },
});

export default withRouter(withStyles(styles)(Transactions));