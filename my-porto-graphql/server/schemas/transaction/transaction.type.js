import GraphQLDate from 'graphql-date'

const trancationType = `
  type Transaction {
    id: ID!,
    reffNumber: String!,
    transactionDate: {
      type: GraphQLDate,
      
    },
    isSubscribe: Boolean!,
    transactionValue: Float!,
    transactionFee: Float!,
    nav: Float!,
    unit: Float!,
    fundProductId: Int!,
    fundProducts: [FundProduct]
  }
`

export default trancationType