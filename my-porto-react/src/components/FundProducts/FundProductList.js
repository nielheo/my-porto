import React, { Component } from "react";

import { Query } from "react-apollo";
import gql from "graphql-tag";

import { TableRow } from 'material-ui/Table';
import CustomTableCell from '../CustomTableCell';
import FundProductRow from './FundProductRow'
import EditFundProductRow from './EditFundProductRow'

class FundProductList extends Component {
  
  render() {
    return(
      <Query
        query={gql`
          {
            fundProducts {
              id
              code
              name
              nav
              fundTypeId
              fundType {
                name
              }
            }
          }
        `}
      >
        {({ loading, error, data }) => {
          if (loading) return <TableRow>
                <CustomTableCell>Loading</CustomTableCell>
              </TableRow>;
          if (error) return <TableRow>
                <CustomTableCell>Error loading data</CustomTableCell>
              </TableRow>;

          return data.fundProducts.map((fundProduct) => (
            
              this.props.codeInEdit === fundProduct.code
              ? <EditFundProductRow fundProduct={fundProduct} key={fundProduct.code} {...this.props} /> 
              : <FundProductRow fundProduct={fundProduct} key={fundProduct.code} {...this.props} />
          ));
        }}
      </Query>
    )
  }
}

export default FundProductList