import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class FundProducts extends Component {
  render() {
    const query = gql`query {
      fundProducts {
        id
        code
        name
        nav
        fundType {
          name
        }
      }
    }`

    const Product = ({loading, error, data}) =>{

      if (loading) return <Text>Loading...</Text>;
      if (error) return <Text>Error :(</Text>;

      let fundProducts = data !== null ? data.fundProducts : null
      //console.log(fundProducts)
      //return <View><Text>{JSON.stringify(data.fundProducts, null, 2)}</Text></View>
      return fundProducts ? fundProducts.map(product => 
        <View style={styles.row} key={product.id}>
          <View style={styles.rowLeftCol}>
            <Text style={styles.code}>{product.code}</Text>
            <Text style={styles.name}>{product.name}</Text>
          </View>
          <View style={styles.rowRightCol}>
            <Text style={styles.nav}>{product.nav.toLocaleString(undefined,
              {'minimumFractionDigits':4,'maximumFractionDigits':4})}</Text>
          </View>
        </View>) : <Text>No data</Text>
    } 
    const ViewWithData = graphql(query)(Product)

    return (
    
      <ScrollView style={styles.container}>
        <ViewWithData />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  row: {
    flex:1,
    padding: 12, 
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
    alignSelf: 'stretch', 
    flexDirection: 'row'
  },
  code: {
    fontSize: 14,
  },
  name: {
    fontSize: 20,
  },
  rowLeftCol: {
    flex: 5,
    alignSelf: 'stretch',
    paddingRight: 5,
  },
  rowRightCol: {
    flex: 2,
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  nav: {
    alignSelf: 'flex-end',
    fontSize: 20,
  }
});