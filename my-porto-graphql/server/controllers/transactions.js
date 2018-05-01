const Transaction = require('../models').Transaction;

module.exports = {
    list(req, res) {
        return Transaction
            .all()
            .then(transactions => transactions)
            .catch(error => error)
        },
}