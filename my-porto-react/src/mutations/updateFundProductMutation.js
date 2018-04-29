import gql from "graphql-tag";

const updateFundProductMutation = gql`
  mutation updateFundProduct($id: Int!, $code: String!, $name: String!, $fundTypeId: Int!) {
    updateFundProduct(id: $id, code: $code, name: $name, fundTypeId: $fundTypeId) {
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

export default updateFundProductMutation;