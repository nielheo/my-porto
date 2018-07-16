import React, {Component} from 'react';

import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Table, TableHead, TableBody, TableRow } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import CustomTableCell from '../CustomTableCell';
import TransactionList from './TransactonList';
import TransactionRowEditor from './TransactionRowEditor';

class Transactions extends Component {
  constructor(props) {
    super(props)
    this.state = {
      transactionIdInEdit: null,
      addingMode: this.props.addingMode || false,
    }
  }

  _addTransactionClicked = () => {
    this.props.history.push('/transactions/add')
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
              onClick={this._addTransactionClicked}
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
                <CustomTableCell>Reff No / Date</CustomTableCell>
                <CustomTableCell>Type / Product</CustomTableCell>
                <CustomTableCell numeric>NAV</CustomTableCell>
                <CustomTableCell numeric>Unit / Value</CustomTableCell>
                <CustomTableCell numeric>Cost / Fee</CustomTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              { this.state.addingMode && <TransactionRowEditor transaction={null} /> }
              
              <TransactionList {...this.props}/>
            </TableBody>
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