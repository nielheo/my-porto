import React, { Component } from 'react';
import { graphql } from "react-apollo";
import gql from "graphql-tag";

import { TableRow, TableFooter, TableBody } from 'material-ui/Table';
import CustomTableCell from '../CustomTableCell';

class PortfolioList extends Component {
  
  render() {
    const { loading, error, portfolios } = this.props.data
    
    if (loading) return <TableBody><TableRow>
                    <CustomTableCell>Loading</CustomTableCell>
                </TableRow></TableBody>;
    if (error) return <TableBody><TableRow>
                    <CustomTableCell>Error loading data</CustomTableCell>
                </TableRow></TableBody>;

    let totalInitialValue = portfolios.map(p => p.totalInitialValue.toFixed(4))
        .reduce(function(acc, val) { return parseFloat(acc) + parseFloat(val); });
    let totalValue = portfolios.map(p => p.totalValue.toFixed(4))
        .reduce(function(acc, val) { return parseFloat(acc) + parseFloat(val); });

    let totalReturn = totalValue - totalInitialValue;
    let returnPercent = (totalReturn / totalInitialValue) * 100;

    return (
      <React.Fragment>
        <TableBody>
       {portfolios.map((portfolio) => 
        <TableRow key={portfolio.fundProductId}>
            <CustomTableCell>{portfolio.fundProduct.name} ({portfolio.fundProduct.code})</CustomTableCell>
            <CustomTableCell numeric>{portfolio.totalTransaction}</CustomTableCell>
            <CustomTableCell numeric>{portfolio.totalUnit.toLocaleString(undefined,
                    {'minimumFractionDigits':4,'maximumFractionDigits':4})}</CustomTableCell>
            <CustomTableCell numeric>{portfolio.averageInitialNav.toLocaleString(undefined,
                    {'minimumFractionDigits':4,'maximumFractionDigits':4})}<br/> 
                    {portfolio.totalInitialValue.toLocaleString(undefined,
                    {'minimumFractionDigits':2,'maximumFractionDigits':2})}</CustomTableCell>
            <CustomTableCell numeric>{portfolio.nav.toLocaleString(undefined,
                    {'minimumFractionDigits':4,'maximumFractionDigits':4})}<br/>
                    {portfolio.totalValue.toLocaleString(undefined,
                    {'minimumFractionDigits':2,'maximumFractionDigits':2})}</CustomTableCell>
            <CustomTableCell numeric>{portfolio.profit.toLocaleString(undefined,
                    {'minimumFractionDigits':2,'maximumFractionDigits':2})}<br/>
                    <b>{portfolio.profitPercent.toLocaleString(undefined,
                    {'minimumFractionDigits':2,'maximumFractionDigits':2})} %</b>
                    </CustomTableCell>
        </TableRow> 
    )}</TableBody>
    <TableFooter>
      <TableRow>
        <CustomTableCell></CustomTableCell>
        <CustomTableCell></CustomTableCell>
        <CustomTableCell></CustomTableCell>
        <CustomTableCell numeric>{totalInitialValue.toLocaleString(undefined,
                      {'minimumFractionDigits':2,'maximumFractionDigits':2})}</CustomTableCell>
        <CustomTableCell numeric>{totalValue.toLocaleString(undefined,
                      {'minimumFractionDigits':2,'maximumFractionDigits':2})}</CustomTableCell>
        <CustomTableCell numeric>{totalReturn.toLocaleString(undefined,
                      {'minimumFractionDigits':2,'maximumFractionDigits':2})}<br/>
                      <b>{returnPercent.toLocaleString(undefined,
                      {'minimumFractionDigits':2,'maximumFractionDigits':2})} %</b></CustomTableCell>
      </TableRow>
    </TableFooter>
    </React.Fragment>
  )
  }
}


const query = gql`
      {
        portfolios {
          fundProductId,
          totalTransaction
          totalUnit
          totalValue
          totalTransactionValue
          averageInitialNav
          nav
          totalInitialValue
          profit
          profitPercent
          fundProduct {
            code name
          }
        }
      }
    `;

export default graphql(query, {
    options: { fetchPolicy: 'cache-and-network' },
  })(PortfolioList)
