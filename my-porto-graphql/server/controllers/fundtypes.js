const FundType = require('../models').FundType;

module.exports = {
  list(req, res) {
    return FundType
      .all()
      .then(fundTypes => fundTypes)
      .catch(error => error)
  }
}