import React, {Component} from 'react';

import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, { TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

import CustomTableCell from '../CustomTableCell';
import PortfolioList from './PortfolioList';

class Portfolios extends Component {
  constructor(props) {
    super(props)
    this.state = {
      transactionIdInEdit: null,
      addingMode: this.props.addingMode || false,
    }
  }
  render() {
    const { classes } = this.props;
    return (
      <section>
        <div className={classes.titleRow}>
          <div className={classes.title}>
            <Typography variant="title" color="inherit" flex="1">
                Portfolio
            </Typography>
          </div>
        </div>
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <CustomTableCell>Product</CustomTableCell>
                <CustomTableCell numeric>Total Transaction</CustomTableCell>
                <CustomTableCell numeric>Total Unit</CustomTableCell>
                <CustomTableCell numeric>Initial avg. NAV<br/> Value</CustomTableCell>
                <CustomTableCell numeric>Current NAV<br/> Value</CustomTableCell>
                <CustomTableCell numeric>Return</CustomTableCell>
              </TableRow>
            </TableHead>
            <PortfolioList />
          </Table>
        </Paper>
      </section>
    )
  }
}

Portfolios.propTypes = {
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

export default withRouter(withStyles(styles)(Portfolios));