import { graphql } from 'react-apollo';
import addTransactionMutation from '../../mutations/addTransactionMutation';

import TransactionEditor from './TransactionEditor';

const TransactionAdd = graphql(addTransactionMutation)(TransactionEditor);
 
export default TransactionAdd;