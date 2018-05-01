const fundTypesController = require('../../controllers').fundTypes;
const fundProductsController = require('../../controllers').fundProducts;

const transactionResolvers = {
    // this is the resolver for Item.owner
    // the first param represents the parent object, which in this case, would be the database results
    // that were mapped to the Item fields
    async fundProduct (transaction) {
      return await fundProductsController.retrieve({ id: transaction.fundProductId })
    }
  }
  
  export default transactionResolvers