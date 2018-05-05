const fundProductType = `
  type FundProduct {
    id: Int!,
    code: String!,
    name: String!,
    fundTypeId: Int!,
    nav: Float!,
    fundType: FundType
  }
`

export default fundProductType