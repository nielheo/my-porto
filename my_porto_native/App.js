/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  render() {
    const query = gql`query {
      fundProducts {
        id
        code
        name
      }
    }`

    const Product = ({loading, error, data}) =>{

      if (loading) return <Text>Loading...</Text>;
      if (error) return <Text>Error :(</Text>;

      let fundProducts = data !== null ? data.fundProducts : null
      //console.log(fundProducts)
      //return <View><Text>{JSON.stringify(data.fundProducts, null, 2)}</Text></View>
      return fundProducts ? fundProducts.map(product => 
        <View style={{paddingLeft: 20, paddingTop: 20}} key={product.id}>
          <Text>Id: {product.id}</Text>
          <Text>Code: {product.code}</Text>
          <Text>Name: {product.name}</Text>
        </View>) : <Text>No data</Text>
    } 
    const ViewWithData = graphql(query)(Product)

    return (
    
      <View style={styles.container}>
        <Text style={{textAlign: 'center'}}>Product List</Text>
        <ViewWithData />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
