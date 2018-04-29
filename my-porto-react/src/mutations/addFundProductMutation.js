import gql from "graphql-tag";

const addFundProductMutation = gql`
  mutation addFundProduct($code: String!, $name: String!, $fundTypeId: Int!) {
    addFundProduct(code: $code, name: $name, fundTypeId: $fundTypeId) {
      id
      code
      name
      fundTypeId
      fundType {
        name
      }
    }
  }
`;

export default addFundProductMutation;