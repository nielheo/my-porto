const fundTypesController = require('../../controllers').fundTypes;

const fundTypeResolvers = {
    // this is the resolver for Item.owner
    // the first param represents the parent object, which in this case, would be the database results
    // that were mapped to the Item fields
    async fundProducts (fundType) {
      return await fundTypesController.list
    }
  }
  
  export default fundTypeResolvers