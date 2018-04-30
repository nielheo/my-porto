const queryEntryPoints = `
  type RootQuery {
    # get Fund Type by id
    fundType(id: Int!): FundType,
    # returns an array of Fund Type
    fundTypes: [FundType],
    fundProduct(id: Int, code: String): FundProduct,
    fundProducts: [FundProduct]
    transactions: [Transaction]
  }
`
export default queryEntryPoints