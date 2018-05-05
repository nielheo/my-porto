const fundTypesController = require('../../controllers').fundTypes;
const fundProductsController = require('../../controllers').fundProducts;
const transactionController = require('../../controllers').transactions;

const rootMutationResolvers = {
  // this corresponds to the `RootMutation.addItem` type
  async addFundType (rootObj, { id, name }) {
    // you'd have to implement this method yourself, would insert the item into a db
    return await fundTypesController.create({ id, name })
  },
  async addFundProduct(rootObj, { code, name, fundTypeId, nav }) {
    return await fundProductsController.create({ code, name, fundTypeId, nav })
  },
  async updateFundProduct(rootObj, { id, code, name, fundTypeId, nav }) {
    return await fundProductsController.update({ id, code, name, fundTypeId, nav })
  },
  async addTransaction(rootObj, { reffNumber, transactionDate, isSubscribe, 
        transactionValue, transactionFee, nav, unit, fundProductId }) {
    return await transactionController.create({ reffNumber, transactionDate, isSubscribe, 
        transactionValue, transactionFee, nav, unit, fundProductId })
  }
}

export default rootMutationResolvers
