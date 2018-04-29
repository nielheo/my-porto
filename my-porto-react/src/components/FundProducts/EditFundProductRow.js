import { graphql } from 'react-apollo';
import addFundProductMutation from '../../mutations/addFundProductMutation';

import FundProductRowEditor from './FundProductRowEditor';

const EditFundProductRow = graphql(addFundProductMutation)(FundProductRowEditor);

export default EditFundProductRow;
