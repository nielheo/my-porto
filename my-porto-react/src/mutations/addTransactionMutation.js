import gql from "graphql-tag";

const addTransactionMutation = gql`
  mutation addTransaction($reffNumber: String!, $transactionDate: Date!, $isSubscribe: Boolean!,
    $transactionValue: Float!, $transactionFee: Float!, $nav: Float!, $unit: Float!, $fundProductId: Int! ) {
      addTransaction(reffNumber: $reffNumber, transactionDate: $transactionDate, isSubscribe: $isSubscribe,
        transactionValue: $transactionValue, transactionFee: $transactionFee, nav: $nav, unit: $unit, 
        fundProductId: $fundProductId) {
          id
          reffNumber
          transactionDate
          isSubscribe
          transactionValue
          transactionFee
          nav
          unit
          fundProductId
    }
  }
`;

export default addTransactionMutation;
