'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.addColumn(
      'FundProducts',
      'nav',
      {
        allowNull: false,
        type: Sequelize.DECIMAL,
        defaultValue: 0,
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.removeColumn('FundProducts', 'nav')
  }
};
