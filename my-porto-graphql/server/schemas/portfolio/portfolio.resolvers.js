const fundTypesController = require('../../controllers').fundTypes;
const fundProductsController = require('../../controllers').fundProducts;


const portfolioResolvers = {
    // this is the resolver for Item.owner
    // the first param represents the parent object, which in this case, would be the database results
    // that were mapped to the Item fields
    async fundProduct (portfolio) {
      console.log(portfolio)
      return await fundProductsController.retrieve({ id: portfolio.fundProductId })
    }
  }
  
  export default portfolioResolvers