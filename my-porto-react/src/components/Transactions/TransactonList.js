import React, { Component } from "react";

import { graphql } from "react-apollo";
import gql from "graphql-tag";
import moment from 'moment';

import { TableRow } from 'material-ui/Table';
import CustomTableCell from '../CustomTableCell';

class TransactionList extends Component {
  
  render() {
    const { loading, error, transactions } = this.props.data
    
    if (loading) return <TableRow>
                    <CustomTableCell>Loading</CustomTableCell>
                </TableRow>;
    if (error) return <TableRow>
                    <CustomTableCell>Error loading data</CustomTableCell>
                </TableRow>;

    return (transactions.map((transaction) => { 
        
        const value = transaction.nav * transaction.unit        
        return (
        <TableRow  key={transaction.id}>
            <CustomTableCell><b>{transaction.reffNumber}</b>
                <br/>{moment(transaction.transactionDate).format('DD/MMM/YYYY')}</CustomTableCell>
            <CustomTableCell><b>{transaction.isSubscribe ? "Subscription" : "Redemption"}</b>
                <br/>{transaction.fundProduct.name} ({transaction.fundProduct.code})</CustomTableCell>
            <CustomTableCell numeric>{transaction.nav.toLocaleString(undefined,
                    {'minimumFractionDigits':4,'maximumFractionDigits':4})}</CustomTableCell>
            <CustomTableCell numeric>{transaction.unit.toLocaleString(undefined,
                    {'minimumFractionDigits':4,'maximumFractionDigits':4})}<br/>
                    <b>{value.toLocaleString(undefined,
                    {'minimumFractionDigits':4,'maximumFractionDigits':4})}</b></CustomTableCell>
            <CustomTableCell numeric>{transaction.transactionValue.toLocaleString(undefined,
                    {'minimumFractionDigits':2,'maximumFractionDigits':2})}<br/>{transaction.transactionFee.toLocaleString(undefined,
                    {'minimumFractionDigits':2,'maximumFractionDigits':2})}</CustomTableCell>
        </TableRow> 
    )}))
  }
}


const query = gql`
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
    `;

export default graphql(query, {
    options: { fetchPolicy: 'cache-and-network' },
  })(TransactionList)