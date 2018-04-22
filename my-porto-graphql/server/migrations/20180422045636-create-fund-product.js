'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => 
    queryInterface.createTable('FundProducts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      code: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      fundTypeId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'FundTypes',
          key: 'id',
          as: 'fundTypeId',
        }
      }
    }),
  down: (queryInterface) => queryInterface.dropTable('FundProducts')
};