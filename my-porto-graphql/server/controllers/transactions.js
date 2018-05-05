const Transaction = require('../models').Transaction;

module.exports = {
    create(req, res) {
        return Transaction
          .create({
              reffNumber: req.reffNumber,
              transactionDate: req.transactionDate,
              isSubscribe: req.isSubscribe,
              transactionValue: req.transactionValue,
              transactionFee: req.transactionFee,
              nav: req.nav,
              unit: req.unit,
              fundProductId: req.fundProductId,
          })
          .then(fundProduct => fundProduct)
          .catch(error => error);
    },
    list(req, res) {
        return Transaction
            .all({
                order: [
                  ['reffNumber']]
              })
            .then(transactions => transactions)
            .catch(error => error)
        },
}