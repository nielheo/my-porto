const fundTypesController = require('../../controllers').fundTypes;
const fundProductsController = require('../../controllers').fundProducts;
const transactionsController = require('../../controllers').transactions;

// must match the field items in RootQuery
const rootQueryResolvers = {
    // this is the resolver for RootQuery.item
    // the first param represents the parent object, which in this case, would be the RootQuery
    // the second param is incoming parameters
    async fundType (rootObj, { id }) {
      // returns an object that matches the ItemType fields
      return await fundTypesController.retrieve({id: id})
    },
    // this is the resolver for RootQuery.items
    async fundTypes () {
      // would return an array of Item
      //return await [{ id: 1, name: 'Money Market'}]
      return await fundTypesController.list()
    },
    async fundProduct(rootObj, { id, code }) {
      return await fundProductsController.retrieve({id, code})
    },
    async fundProducts() {
      return await fundProductsController.list({})
    },
    async transactions() {
      return await transactionsController.list()
    }
  }
  
  export default rootQueryResolvers