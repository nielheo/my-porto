import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';

//import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';

const Client = () => {
  /*const networkInterface = createNetworkInterface({
    uri: 'http://52.221.195.25:3000/graphql'
  })*/
  const client = new ApolloClient({
    uri: "http://52.221.195.25:3000/graphql"
  });
  return (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>)
}

AppRegistry.registerComponent('my_porto_native', () => Client);
