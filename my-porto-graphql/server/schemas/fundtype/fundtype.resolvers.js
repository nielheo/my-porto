const fundTypeResolvers = {
    // this is the resolver for Item.owner
    // the first param represents the parent object, which in this case, would be the database results
    // that were mapped to the Item fields
    async fundProducts (fundType) {
      return [{id:1, code: 'code-1', name:'name-1'},
        {id:2, code: 'code-2', name:'name-2'},
        {id:3, code: 'code-3', name:'name-3'}]
    }
  }
  
  export default fundTypeResolvers