import React, { Component } from "react";

import { Query } from "react-apollo";
import gql from "graphql-tag";

import FundProductRow from './FundProductRow'
import EditFundProductRow from './EditFundProductRow'

class FundProductList extends Component {
  
  render() {
    return(
      <Query
        query={gql`
          {
            fundProducts {
              code
              name
              fundType {
                name
              }
            }
          }
        `}
      >
        {({ loading, error, data }) => {
          if (loading) return null;
          if (error) return null;

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