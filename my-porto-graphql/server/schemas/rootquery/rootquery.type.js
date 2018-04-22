const queryEntryPoints = `
  type RootQuery {
    # get an item
    fundType(id: Int!): FundType,
    # returns an array of items
    fundTypes: [FundType]
  }
`
export default queryEntryPoints