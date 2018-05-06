const portfolioType = `
  type Portfolio {
    fundProductId: Int!,
    fundProduct: FundProduct
    totalTransaction: Int!,
    totalUnit: Float!,
    averageInitialNav: Float!,
    totalInitialValue: Float!,
    totalTransactionValue: Float!,
    nav: Float!,
    totalValue: Float!,
    profit: Float!,
    profitPercent: Float!,
  }
`

export default portfolioType