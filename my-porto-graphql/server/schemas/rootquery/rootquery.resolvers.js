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
    },
    async portfolios() {
      let transactions = await transactionsController.list();
      return await fundProductsController.list({}).map(p => {
        let totalInitialValue = transactions.filter(t => t.fundProductId == p.id).map(f => (f.unit * f.nav).toFixed(4))
          .reduce(function(acc, val) { return parseFloat(acc) + parseFloat(val); });

        let totalUnit = transactions.filter(t => t.fundProductId == p.id).map(f => f.unit)
          .reduce(function(acc, val) { return parseFloat(acc) + parseFloat(val); });

        let totalTransactionValue = transactions.filter(t => t.fundProductId == p.id).map(f => f.transactionValue)
          .reduce(function(acc, val) { return parseFloat(acc) + parseFloat(val); })

        let totalValue = (p.nav * totalUnit).toFixed(4);
        let profit = totalValue - totalInitialValue;
        let profitPercent = ((profit / totalInitialValue) * 100).toFixed(2);
          
        return {
          fundProductId: p.id,
          totalUnit: totalUnit,
          averageInitialNav: (totalValue / totalUnit).toFixed(4),
          totalInitialValue: totalInitialValue,
          totalValue: totalValue,
          totalTransactionValue: totalTransactionValue,
          nav: p.nav,
          profit,
          profitPercent,
        }
      })
    }
  }
  
  export default rootQueryResolvers