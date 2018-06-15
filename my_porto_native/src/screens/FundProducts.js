import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';

import { FormattedNumber } from 'react-native-globalize';

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import PTRView from 'react-native-pull-to-refresh';

let Product

export default class FundProducts extends Component {

  _refresh = () => {
    console.log('--- refreshing ---');
    console.log(Product.data1);  
    Product.data.refetch();
  }

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

    Product = ({loading, error, data, refetch}) =>{

      let data1 = data

      if (loading) return <Text>Loading...</Text>;
      if (error) return <Text>Error :(</Text>;

      let fundProducts = data !== null ? data.fundProducts : null

      console.log(refetch);
      //console.log(fundProducts)
      //return <View><Text>{JSON.stringify(data.fundProducts, null, 2)}</Text></View>
      return (<PTRView onRefresh={refetch}>
        <ScrollView style={styles.container}> 
          {fundProducts ? fundProducts.map(product => 
            <View style={styles.row} key={product.id}>
              <View style={styles.rowLeftCol}>
                <Text style={styles.code}>{product.code}</Text>
                <Text style={styles.name}>{product.name}</Text>
              </View>
              <View style={styles.rowRightCol}>
                <FormattedNumber
                    value={product.nav}
                    minimumFractionDigits={4}
                    maximumFractionDigits={4}
                    style={styles.nav} />
              </View>
            </View>) 
            : <Text>No data</Text>}
          </ScrollView>
        </PTRView>)
    } 
    const ViewWithData = graphql(query)(Product)

    return (
      
          <ViewWithData />
        
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
    color: 'green'
  }
});