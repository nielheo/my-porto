import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
import FundProductSelect from '../FundProductSelect';
import Grid from 'material-ui/Grid';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Input, { InputLabel } from 'material-ui/Input';
import Select from 'material-ui/Select';
import { MenuItem } from 'material-ui/Menu';

class TransactionEditor extends Component {
  render() {
    const { classes } = this.props
    return(<section>
      <Typography variant="headline" component="h3">
        Transaction Editor
      </Typography>
      <Paper className={classes.paper}>
        <Grid container spacing={16}>
          <Grid item xs={12} sm={6} lg={3}>
            <TextField
              id="transactionDate"
              label="Transaction Date"
              value=""
              className={classes.textField}
              //helperText="Some important text"
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TextField
              id="reffNumber"
              label="Refference Number"
              value=""
              className={classes.textField}
              //helperText="Some important text"
              fullWidth
              margin="normal"
            />
          </Grid>
          </Grid>
        <Grid container spacing={16}>
          <Grid item xs={12} sm={6} lg={3}>
            <FundProductSelect value={''} />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <FormControl fullWidth margin="normal" className={classes.formControl}>
              <InputLabel htmlFor="transactionType">Type</InputLabel>
              <Select fullWidth value={''} onChange={this.props.onChange} className={classes.select} input={<Input id="transactionType" />} >
                { this.props.fundProductId === '' && <MenuItem value={''} className={classes.menu}></MenuItem> }
                  <MenuItem value={true} key={1} className={classes.menu}>Subscription</MenuItem>
                  <MenuItem value={false} key={0} className={classes.menu}>Redemption</MenuItem>
              
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Grid container spacing={16}>
          <Grid item xs={12} sm={6} lg={3}>
            <TextField
              id="nav"
              label="NAV"
              value=""
              className={classes.textField}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TextField
              id="unit"
              label="Unit"
              value=""
              className={classes.textField}
              //helperText="Some important text"
              fullWidth
              margin="normal"
            />
          </Grid>
          </Grid>
        <Grid container spacing={16}>
          <Grid item xs={12} sm={6} lg={3}>
          <TextField
              id="cost"
              label="Cost"
              value=""
              className={classes.textField}
              //helperText="Some important text"
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
          <TextField
              id="fee"
              label="Fee"
              value=""
              className={classes.textField}
              //helperText="Some important text"
              fullWidth
              margin="normal"
            />
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


