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
      return [{id:1, name: 'Money Market'},
        {id:2, name: 'Fixed Income'},
        {id:3, name: 'Equity'},
        {id:4, name: 'Mixed'}]
    }
  }
  
  export default rootQueryResolvers