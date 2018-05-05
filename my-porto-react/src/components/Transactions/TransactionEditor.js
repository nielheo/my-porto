import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
import FundProductSelect from '../FundProductSelect';
import Grid from 'material-ui/Grid';
import { FormControl } from 'material-ui/Form';
import Input, { InputLabel } from 'material-ui/Input';
import Select from 'material-ui/Select';
import { MenuItem } from 'material-ui/Menu';
import DatePicker from 'material-ui-pickers/DatePicker';
import Button from 'material-ui/Button';

class TransactionEditor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      transactionDate: null,
      reffNumber: '',
      fundProductId: '',
      isSubscribe: 1,
      nav: '',
      unit: '',
      transactionValue: '',
      transactionFee: '',
      isClicked: false,
    }
  }

  _transactionDateChanged = (e) => {
    if (this.state.transactionDate !== e) {
      this.setState({transactionDate: e});
    }
  }

  _reffNumberChanged = (e) => {
    if (this.state.reffNumber !== e.target.value) {
      this.setState({reffNumber: e.target.value});
    }
  }

  _transactionTypeChanged = (e) => {
    if (this.state.isSubscribe !== e.target.value) {
      this.setState({isSubscribe: e.target.value});
    }
  }

  _fundProductChanged = (e) => {
    if (this.state.fundProductId !== e.target.value) {
      this.setState({fundProductId: e.target.value});
    }
  }

  _navChanged = (e) => {
    if (this.state.nav !== e.target.value) {
      this.setState({nav: e.target.value});
    }
  }

  _unitChanged = (e) => {
    if (this.state.unit !== e.target.value) {
      this.setState({unit: e.target.value});
    }
  }

  _transactionValueChanged = (e) => {
    if (this.state.transactionValue !== e.target.value) {
      this.setState({transactionValue: e.target.value});
    }
  }

  _transactionFeeChanged = (e) => {
    if (this.state.transactionFee !== e.target.value) {
      this.setState({transactionFee: e.target.value});
    }
  }

  _validateInput = () => {
    return true && this.state.transactionDate 
      && this.state.reffNumber
      && this.state.fundProductId
      && this.state.nav
      && this.state.unit 
      && this.state.transactionValue
      && this.state.transactionFee
  }

  _save = () => {
    const {reffNumber, transactionDate, fundProductId, isSubscribe,
      nav, unit, transactionValue, transactionFee } = this.state
    this.props.mutate({
      variables: { reffNumber, transactionDate, isSubscribe, transactionValue,
        transactionFee, nav, unit, fundProductId }
    }).then(() => {
      this.props.history.push('/transactions')
    })
  }

  _saveClicked = () =>{
    this.setState({isClicked: true});
    if (this._validateInput()) {
      this._save();
    } else {
      console.log('Incomplete data');
    }
  }

  render() {
    const { classes } = this.props
    return(<section>
      <Typography variant="headline" component="h3">
        Transaction Editor
      </Typography>
      <Paper className={classes.paper}>
        <Grid container spacing={16}>
          <Grid item xs={12} sm={6} lg={3}>
            <DatePicker
              error={this.state.isClicked && !this.state.transactionDate}
              value={this.state.transactionDate}
              id="transactionDate"
              label="Transaction Date"
              onChange={this._transactionDateChanged}
              format="D MMM YYYY"
              autoOk={true}
              fullWidth
              margin="normal"
              className={classes.textField}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TextField
              error={this.state.isClicked && !this.state.reffNumber}
              id="reffNumber"
              label="Refference Number"
              value={this.state.reffNumber}
              className={classes.textField}
              onChange={this._reffNumberChanged}
              //helperText="Some important text"
              fullWidth
              margin="normal"
            />
          </Grid>
          </Grid>
        <Grid container spacing={16}>
          <Grid item xs={12} sm={6} lg={3}>
            <FundProductSelect 
              error={this.state.isClicked && !this.state.fundProductId}
              value={this.state.fundProductId} 
              onChange={this._fundProductChanged} />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <FormControl fullWidth margin="normal" className={classes.formControl}>
              <InputLabel htmlFor="transactionType">Type</InputLabel>
              <Select fullWidth value={this.state.isSubscribe} onChange={this._transactionTypeChanged} className={classes.select} input={<Input id="transactionType" />} >
                <MenuItem value={1} key={1} className={classes.menu}>Subscription</MenuItem>
                <MenuItem value={0} key={0} className={classes.menu}>Redemption</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Grid container spacing={16}>
          <Grid item xs={12} sm={6} lg={3}>
            <TextField
              error={this.state.isClicked && !this.state.nav}
              id="nav"
              label="NAV"
              value={this.state.nav}
              className={classes.textField}
              onChange={this._navChanged}
              fullWidth
              type="number"
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TextField
              error={this.state.isClicked && !this.state.unit}
              id="unit"
              label="Unit"
              value={this.state.unit}
              className={classes.textField}
              onChange={this._unitChanged}
              fullWidth
              type="number"
              margin="normal"
            />
          </Grid>
          </Grid>
        <Grid container spacing={16}>
          <Grid item xs={12} sm={6} lg={3}>
            <TextField
              error={this.state.isClicked && !this.state.transactionValue}
              id="cost"
              label="Cost"
              value={this.state.transactionValue}
              className={classes.textField}
              onChange={this._transactionValueChanged}
              fullWidth
              type="number"
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TextField
              error={this.state.isClicked && !this.state.transactionFee}
              id="fee"
              label="Fee"
              value={this.state.transactionFee}
              className={classes.textField}
              onChange={this._transactionFeeChanged}
              fullWidth
              type="number"
              margin="normal"
            />
          </Grid>
        </Grid>
        <Grid container spacing={16} >
          <Grid item xs={3} lg={3} >
            <Button color="primary" className={classes.button} 
              onClick={this._saveClicked}
              variant="raised"
              >
              Save
            </Button>
            <Button color="primary" className={classes.button} 
              onClick={this._cancelClicked}
              >
              Cancel
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </section>
      
    )
  }
}

TransactionEditor.propTypes = {
  classes: PropTypes.object.isRequired,
};

const styles = theme => ({
  paper: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
    flexGrow: 1,
  }),
  table: {
    minWidth: 700,
  },
  button: {
    margin: theme.spacing.unit,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
   // width: 200,
  },
  menu: {
  //  width: 200,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});

export default withRouter(withStyles(styles)(TransactionEditor))


