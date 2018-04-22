const FundProduct = require('../models').FundProduct;

module.exports = {
  create(req, res) {
    return FundProduct
      .create({
        code: req.code,
        name: req.name,
        fundTypeId: req.fundTypeId,
      })
      .then(fundProduct => fundProduct)
      .catch(error => error);
  },
  list(req, res) {
    if (!req.fundTypeId) {
      return FundProduct
        .all()
        .then(fundProducts => fundProducts)
        .catch(error => error)
    } else {
      //return [{id:req.fundTypeId, code:'code-1', name: 'name-1'}]
      return FundProduct
        .findAll({ where :{ fundTypeId: req.fundTypeId }})
        .then(fundProducts => fundProducts || [])
        .catch(error => error)
    }
  },
  retrieve(req, res) {
    let query = {}
    if (req.id) query.id = req.id
    if (req.code) query.code = req.code

    //if (query === {}) return null

    return FundProduct
      .findOne({ where: query })
      .then(fundProduct => fundProduct)
      .catch(error => error);
  },
}