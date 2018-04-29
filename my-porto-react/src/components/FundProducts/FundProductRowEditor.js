import React, { Component } from "react";

import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { TableRow } from 'material-ui/Table';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import CustomTableCell from '../CustomTableCell';
import FundTypeSelect from '../FundTypeSelect';

class EditFundProductRow extends Component {
  constructor(props){
    super(props)
    this.state = {
      code: props.fundProduct ? props.fundProduct.code : '',
      name: props.fundProduct ? props.fundProduct.name : '',
      fundTypeId: props.fundProduct ? props.fundProduct.fundTypeId : '',
    }
  }

  _onCodeChanged = (e) => {
    if (e.target.value !== this.state.code) {
      this.setState({code: e.target.value});
    }
  }

  _onNameChanged = (e) => {
    if (e.target.value !== this.state.name) {
      this.setState({name: e.target.value});
    }
  }

  _onSaveClicked = () => {
    const {code, name, fundTypeId} = this.state
    this.props.mutate({variables: {code, name, fundTypeId}})
      .then(() => {
        this.props.router.replace('/')
      })
  }

  _onFundTypeChanged = (e) => {
    this.setState({
      fundTypeId: e.target.value
    })
  }

  render() {
    const { classes, fundProduct } = this.props;
    
    return (<TableRow className={classes.row} key={fundProduct ? fundProduct.code : ''}>
      <CustomTableCell>
        <TextField 
          fullWidth 
          value={this.state.code}
          onChange={this._onCodeChanged}
        />
      </CustomTableCell>
      <CustomTableCell>
        <TextField 
          fullWidth 
          value={this.state.name}
          onChange={this._onNameChanged}
        />
      </CustomTableCell>
      <CustomTableCell>
        <FundTypeSelect 
          fundTypeId={this.state.fundTypeId} 
          onChange={this._onFundTypeChanged}/>
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

EditFundProductRow.propTypes = {
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

export default withStyles(styles)(EditFundProductRow);
