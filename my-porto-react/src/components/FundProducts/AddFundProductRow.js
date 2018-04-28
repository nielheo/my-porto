import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { TableRow } from 'material-ui/Table';
import Button from 'material-ui/Button';
import Select from 'material-ui/Select';
import TextField from 'material-ui/TextField';
import { MenuItem } from 'material-ui/Menu';

import CustomTableCell from '../CustomTableCell'

class AddFundProductRow extends Component  {
  render() {
    const { classes } = this.props
    return (
      <TableRow className={classes.row}>
              <CustomTableCell><TextField
        placeholder="Hint Text"
      /></CustomTableCell>
              <CustomTableCell><TextField
        placeholder="Hint Text"
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
            <CustomTableCell>
              <Button 
                  color="primary" 
                  className={classes.button} >
                Save
              </Button>
              <Button 
                  color="primary" 
                  className={classes.button} 
                  onClick={this.props.onCancelClicked} >
                Cancel
              </Button>
            </CustomTableCell>
          </TableRow>
    )
  }
}

AddFundProductRow.propTypes = {
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
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});

export default withStyles(styles)(AddFundProductRow);