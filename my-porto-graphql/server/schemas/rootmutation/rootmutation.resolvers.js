const fundTypesController = require('../../controllers').fundTypes;

const rootMutationResolvers = {
  // this corresponds to the `RootMutation.addItem` type
  async addFundType (rootObj, { id, name }) {
    // you'd have to implement this method yourself, would insert the item into a db
    return await fundTypesController.create({ id, name })
  }
}

export default rootMutationResolvers