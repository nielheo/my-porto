import gql from "graphql-tag";

const updateFundProductMutation = gql`
  mutation updateFundProduct($id: Int!, $code: String!, $name: String!, $fundTypeId: Int!, $nav: Float!) {
    updateFundProduct(id: $id, code: $code, name: $name, fundTypeId: $fundTypeId, nav: $nav) {
      id
      code
      name
      nav
      fundTypeId
      fundType {
        name
      }
    }
  }
`;

export default updateFundProductMutation;