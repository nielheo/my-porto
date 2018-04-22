const queryEntryPoints = `
  type RootQuery {
    # get an item
    fundType(id: Int!): FundType,
    # returns an array of items
    fundTypes: [FundType],
    fundProduct(id: Int, code: String): FundProduct,
    fundProducts: [FundProduct]
  }
`
export default queryEntryPoints