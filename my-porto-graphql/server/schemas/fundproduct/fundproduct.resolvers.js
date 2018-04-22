const fundProductResolvers = {
    // this is the resolver for Item.owner
    // the first param represents the parent object, which in this case, would be the database results
    // that were mapped to the Item fields
    async owner (item) {
      return await getUser(item.ownerId)
    }
  }
  
  export default fundProductResolvers