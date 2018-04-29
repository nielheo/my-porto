import { graphql } from 'react-apollo';
import updateFundProductMutation from '../../mutations/updateFundProductMutation';

import FundProductRowEditor from './FundProductRowEditor';

const EditFundProductRow = graphql(updateFundProductMutation)(FundProductRowEditor);

export default EditFundProductRow;
