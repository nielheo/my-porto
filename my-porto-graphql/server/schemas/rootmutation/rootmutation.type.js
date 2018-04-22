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
  }
`
export default RootMutation