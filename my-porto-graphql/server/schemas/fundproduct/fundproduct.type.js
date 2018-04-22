const fundProductType = `
  type FundProduct {
    id: Int!,
    code: String!,
    name: String!,
    fundTypeId: Int!,
    fundType: FundType
  }
`

export default fundProductType