import React, { Component } from "react";

import { Query } from "react-apollo";
import gql from "graphql-tag";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Input, InputLabel } from '@material-ui/core';
import { FormControl } from '@material-ui/core';

import Select from '@material-ui/core/Select';
import { MenuItem } from '@material-ui/core';

class FundProductSelect extends Component {
  
  render() {
    const { classes } = this.props
    return(
      <Query
        query={gql`
          {
            fundProducts {
              id
              code
              name
            }
          }
        `}
      >
        {({ loading, error, data }) => {
          if (loading) return null;
          if (error) return null;

          return <FormControl fullWidth margin="normal" className={classes.formControl} error={this.props.error}>
                  <InputLabel htmlFor="fundProduct">Product</InputLabel>
                  <Select fullWidth value={this.props.value} onChange={this.props.onChange} className={classes.select} input={<Input id="fundProduct" />} >
                    { this.props.fundProductId === '' && <MenuItem value={''} className={classes.menu}></MenuItem> }
                    { data.fundProducts.map(({id, name}) => (
                      <MenuItem value={id} key={id} className={classes.menu}>{name}</MenuItem>
                    ))};
                  </Select>
                  </FormControl>
        }}
      </Query>
    )
  }
}

FundProductSelect.propTypes = {
  classes: PropTypes.object.isRequired,
};

const styles = theme => ({
  select: {
    //marginLeft: theme.spacing.unit,
    //marginRight: theme.spacing.unit,
    //width: 200,
  },
  formControl: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  //  width: 200,
  },
  menu: {
  //  width: 200,
  },
});

export default withStyles(styles)(FundProductSelect)