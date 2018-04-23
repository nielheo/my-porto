'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert('FundTypes', 
    [ { id: 1, name: 'Money Market', createdAt: new Date(), updatedAt: new Date() }, 
      { id: 2, name: 'Fixed Income', createdAt: new Date(), updatedAt: new Date() },
      { id: 3, name: 'Equity', createdAt: new Date(), updatedAt: new Date() },
      { id: 4, name: 'Mixed', createdAt: new Date(), updatedAt: new Date() }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
      
    */
    return queryInterface.bulkDelete('FundTypes', [
      { id: 1}, {id: 2}, {id:3}, {id:4}
    ])
  }
};
