import React from "react";

import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { TableRow } from 'material-ui/Table';
import Button from 'material-ui/Button';

import CustomTableCell from '../CustomTableCell'

const FundProductRow = (props) => {
  const { classes, fundProduct } = props;
  
  return (<TableRow className={classes.row} key={fundProduct.code}>
    <CustomTableCell>{fundProduct.code}</CustomTableCell>
    <CustomTableCell>{fundProduct.name}</CustomTableCell>
    <CustomTableCell>{fundProduct.fundType.name}</CustomTableCell>
    <CustomTableCell numeric>{fundProduct.nav.toLocaleString(undefined,
                    {'minimumFractionDigits':4,'maximumFractionDigits':4})}</CustomTableCell>
    <CustomTableCell>
      <Button 
        color="primary" 
        className={classes.button} 
        disabled={props.addingMode || props.codeInEdit !== null}
        onClick={() => props.onEditClicked(fundProduct.code)} >
      Edit
    </Button></CustomTableCell>
  </TableRow>)
}

FundProductRow.propTypes = {
  classes: PropTypes.object.isRequired,
};

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
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
  table: {
    minWidth: 700,
  },
  button: {
    margin: theme.spacing.unit,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});

export default withStyles(styles)(FundProductRow);
