import React from "react";

import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import { Switch, Route } from 'react-router-dom'

import Home from './components/Home'
import FundProducts from './components/FundProducts'
import FundTypes from './components/FundTypes'
import Transactions from './components/Transactions'
import TransactionsAdd from './components/Transactions/TransactionAdd'
import Portfolios from './components/Portfolios'

const client = new ApolloClient({
  uri: "http://localhost:3000/graphql"
});

const Content = () => (
  <ApolloProvider client={client}>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/fundtypes' component={FundTypes}/>
      <Route exact path='/fundproducts' component={FundProducts}/>
      <Route exact path='/transactions/add' component={TransactionsAdd} />
      <Route exact path='/transactions' component={Transactions} />
      <Route exact path='/portfolio' component={Portfolios} />
      
    </Switch>
  </ApolloProvider>
);

export default Content;