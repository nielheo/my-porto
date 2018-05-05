import React, { Component } from "react";

import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { TableRow } from 'material-ui/Table';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import CustomTableCell from '../CustomTableCell';
import FundTypeSelect from '../FundTypeSelect';

import { withRouter } from 'react-router-dom';

class FundProductRowEditor extends Component {
  constructor(props){
    super(props)
    this.state = {
      code: props.fundProduct ? props.fundProduct.code : '',
      name: props.fundProduct ? props.fundProduct.name : '',
      fundTypeId: props.fundProduct ? props.fundProduct.fundTypeId : '',
      nav: props.fundProduct ? props.fundProduct.nav : '',
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
    const {code, name, fundTypeId, nav} = this.state
    const {fundProduct} = this.props
    this.props.mutate({
      variables: {id: fundProduct ? fundProduct.id : null, code, name, fundTypeId, nav},
      refetchQueries: [`fundProducts`]
    }).then(() => {
      this.props.onCancelEditClicked();
    })
  }

  _onFundTypeChanged = (e) => {
    this.setState({
      fundTypeId: e.target.value
    })
  }

  _onNavChanged = (e) => {
    this.setState({
      nav: e.target.value
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
        <TextField 
          fullWidth 
          type="number"
          value={this.state.nav}
          onChange={this._onNavChanged}
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

FundProductRowEditor.propTypes = {
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

export default withRouter(withStyles(styles)(FundProductRowEditor));
