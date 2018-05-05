import gql from "graphql-tag";

const addFundProductMutation = gql`
  mutation addFundProduct($code: String!, $name: String!, $fundTypeId: Int!, $nav: Float!) {
    addFundProduct(code: $code, name: $name, fundTypeId: $fundTypeId, nav: $nav) {
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