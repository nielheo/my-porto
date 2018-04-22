const fundTypesController = require('../../controllers').fundTypes;

const fundProductResolvers = {
    // this is the resolver for Item.owner
    // the first param represents the parent object, which in this case, would be the database results
    // that were mapped to the Item fields
    async fundType (fundProduct) {
      return await fundTypesController.retrieve({id: fundProduct.fundTypeId})
    }
  }
  
  export default fundProductResolvers