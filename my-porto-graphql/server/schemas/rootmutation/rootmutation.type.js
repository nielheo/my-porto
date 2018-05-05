const RootMutation = `
  type RootMutation {
    addFundType (
      id: Int!,
      name: String!
    ): FundType,
    addFundProduct (
      code: String!,
      name: String!,
      fundTypeId: Int!
    ): FundProduct,
    updateFundProduct (
      id: Int!,
      code: String!,
      name: String!,
      fundTypeId: Int!
    ): FundProduct,
    addTransaction (
      reffNumber: String!,
      transactionDate: Date!,
      isSubscribe: Boolean!,
      transactionValue: Float!,
      transactionFee: Float!,
      nav: Float!,
      unit: Float!,
      fundProductId: Int!
    ): Transaction
  }
`
export default RootMutation