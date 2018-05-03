import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';

class TransactionEditor extends Component {

  render() {
    const { classes } = this.props
    return(<section>
      <Typography variant="headline" component="h3">
        Transaction Editor
      </Typography>
      <Paper className={classes.root}>
        <TextField
          id="transactionDate"
          label="Transaction Date"
          value=""
          className={classes.textField}
          //helperText="Some important text"
          margin="normal"
        />
        <TextField
          id="reffNumber"
          label="Refference Number"
          value=""
          className={classes.textField}
          //helperText="Some important text"
          margin="normal"
        />
        <TextField
          id="product"
          label="Product"
          select
          value=""
          className={classes.textField}
          //helperText="Some important text"
          margin="normal"
          SelectProps={{
            native: true,
            MenuProps: {
              className: classes.menu,
            },
          }}
        >
          <option key={0} value={''}></option>
          <option key={1} value={1}>Option 1</option>
          <option key={2} value={2}>Option 2</option>
        </TextField>
      </Paper>
    </section>
      
    )
  }
}

TransactionEditor.propTypes = {
  classes: PropTypes.object.isRequired,
};

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
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
    width: 200,
  },
  menu: {
    width: 200,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});

export default withRouter(withStyles(styles)(TransactionEditor))


