const RootMutation = `
  type RootMutation {
    addFundType (
      id: Int!,
      name: String!
    ): FundType
  }
`
export default RootMutation