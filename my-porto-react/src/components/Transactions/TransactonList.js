import React, { Component } from "react";

import { Query } from "react-apollo";
import gql from "graphql-tag";
import moment from 'moment';

import { TableBody, TableRow } from 'material-ui/Table';
import CustomTableCell from '../CustomTableCell';

class TransactionList extends Component {
  
  render() {
    return(
      <Query
        query={gql`
          {
            transactions {
                id
                reffNumber
                transactionDate
                isSubscribe
                transactionValue
                transactionFee
                nav
                unit
                fundProductId
                fundProduct {
                    id
                    code
                    name
                }
            }
          }
        `}
      >
        {({ loading, error, data }) => {
          if (loading) return <TableBody>
              <TableRow>
                  <CustomTableCell>Loading</CustomTableCell>
              </TableRow>
            </TableBody>;
          if (error) return 'Error loading data';

          return (
            <TableBody>
                { data.transactions.map((transaction) => (
                    <TableRow  key={transaction.id}>
                        <CustomTableCell>{moment(transaction.transactionDate).format('DD/MMM/YYYY')}</CustomTableCell>
                        <CustomTableCell>{transaction.reffNumber}</CustomTableCell>
                        <CustomTableCell>{transaction.fundProduct.name} ({transaction.fundProduct.code})</CustomTableCell>
                        <CustomTableCell>{transaction.isSubscribe ? "Subscription" : "Redemption"}</CustomTableCell>
                        <CustomTableCell numeric>{transaction.nav.toLocaleString(undefined,
                                {'minimumFractionDigits':4,'maximumFractionDigits':4})}</CustomTableCell>
                        <CustomTableCell numeric>{transaction.unit.toLocaleString(undefined,
                                {'minimumFractionDigits':4,'maximumFractionDigits':4})}</CustomTableCell>
                        <CustomTableCell numeric>{transaction.transactionValue.toLocaleString(undefined,
                                {'minimumFractionDigits':2,'maximumFractionDigits':2})}</CustomTableCell>
                        <CustomTableCell numeric>{transaction.transactionFee.toLocaleString(undefined,
                                {'minimumFractionDigits':2,'maximumFractionDigits':2})}</CustomTableCell>
                    </TableRow> 
                ))}
            </TableBody>)
        }}
      </Query>
    )
  }
}

export default TransactionList