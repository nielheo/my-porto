import React, { Component } from 'react';
import TransactionEditor from './TransactionEditor';

class TransactionAdd extends Component {
  render() {
    return (
      <TransactionEditor addingMode={true} />
    )
  }
}
 
export default TransactionAdd