import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { TableRow } from 'material-ui/Table';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import CustomTableCell from '../CustomTableCell';

import { withRouter } from 'react-router-dom';

class TransactionRowEditor extends Component {
  constructor(props){
    super(props)
    this.state = {
      transactionId: props.transaction ? props.transaction.id : '',
    }
  }

  render() {
    const { classes } = this.props;
    
    return (<TableRow className={classes.row} >
      <CustomTableCell>
        <TextField 
           
          value={this.state.code}
          onChange={this._onCodeChanged}
        />
      </CustomTableCell>
      <CustomTableCell>
        <TextField 
           
          value={this.state.name}
          onChange={this._onNameChanged}
        />
      </CustomTableCell>
      <CustomTableCell>
        <TextField 
           
          value={this.state.name}
          onChange={this._onNameChanged}
        />
      </CustomTableCell>
      <CustomTableCell>
        <TextField 
           
          value={this.state.name}
          onChange={this._onNameChanged}
        />
      </CustomTableCell>
      <CustomTableCell>
        <TextField 
           
          value={this.state.name}
          onChange={this._onNameChanged}
        />
      </CustomTableCell>
      <CustomTableCell>
        <TextField 
           
          value={this.state.name}
          onChange={this._onNameChanged}
        />
      </CustomTableCell>
      <CustomTableCell>
        <TextField 
           
          value={this.state.name}
          onChange={this._onNameChanged}
        />
      </CustomTableCell>
      <CustomTableCell>
        <TextField 
           
          value={this.state.name}
          onChange={this._onNameChanged}
        />
      </CustomTableCell>
      <CustomTableCell>
        <Button 
            color="primary" 
            className={classes.button} 
            onClick={this._onSaveClicked} >
          Save
        </Button>
        <Button 
            color="primary" 
            className={classes.button} 
            onClick={this.props.onCancelEditClicked} >
          Cancel
        </Button>
      </CustomTableCell>
    </TableRow>)
  }
}

TransactionRowEditor.propTypes = {
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

export default withRouter(withStyles(styles)(TransactionRowEditor))