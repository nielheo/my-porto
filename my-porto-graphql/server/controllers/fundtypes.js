const FundType = require('../models').FundType;

module.exports = {
  create(req, res) {
    return FundType
      .create({
        id: req.id,
        name: req.name,
      })
      .then(fundType => fundType)
      .catch(error => error);
  },
  list(req, res) {
    return FundType
      .all()
      .then(fundTypes => fundTypes)
      .catch(error => error)
  },
  retrieve(req, res) {
    return FundType
      .findById(req.id)
      .then(fundType => fundType)
      .catch(error => error);
  },
}