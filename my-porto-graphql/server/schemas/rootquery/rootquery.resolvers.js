const fundTypesController = require('../../controllers').fundTypes;

// must match the field items in RootQuery
const rootQueryResolvers = {
    // this is the resolver for RootQuery.item
    // the first param represents the parent object, which in this case, would be the RootQuery
    // the second param is incoming parameters
    async fundType (rootObj, { id }) {
      // returns an object that matches the ItemType fields
      return { id: 1, name: 'Money Market'}
    },
    // this is the resolver for RootQuery.items
    async fundTypes () {
      // would return an array of Item
      //return await [{ id: 1, name: 'Money Market'}]
      return await fundTypesController.list()
    }
  }
  
  export default rootQueryResolvers