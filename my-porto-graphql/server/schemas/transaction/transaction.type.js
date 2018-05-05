//import GraphQLDate from 'graphql-date'

const trancationType = `
  type Transaction {
    id: ID!,
    reffNumber: String!,
    transactionDate: Date!,
    isSubscribe: Boolean!,
    transactionValue: Float!,
    transactionFee: Float!,
    nav: Float!,
    unit: Float!,
    fundProductId: Int!,
    fundProduct: FundProduct
  }
`

export default trancationType 