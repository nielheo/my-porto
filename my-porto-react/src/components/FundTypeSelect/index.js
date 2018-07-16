import React, { Component } from "react";

import { Query } from "react-apollo";
import gql from "graphql-tag";

import Select from '@material-ui/core/Select';
import { MenuItem } from '@material-ui/core';

class FundTypeSelect extends Component {
  
  render() {
    return(
      <Query
        query={gql`
          {
            fundTypes {
              id
              name
            }
          }
        `}
      >
        {({ loading, error, data }) => {
          if (loading) return null;
          if (error) return null;

          return <Select fullWidth value={this.props.fundTypeId} onChange={this.props.onChange}>
            { this.props.fundTypeId === '' && <MenuItem value={''}></MenuItem> }
            { data.fundTypes.map(({id,name}) => (
              <MenuItem value={id} key={id}>{name}</MenuItem>
            ))};
          </Select>
        }}
      </Query>
    )
  }
}

export default FundTypeSelect