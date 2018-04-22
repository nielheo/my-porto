'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => 
    queryInterface.createTable('Transactions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      reffNumber: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      transactionDate: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      isSubscribe: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      transactionValue: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      transactionFee: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      nav: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      unit: {
        type: Sequelize.DECIMAL,
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
      fundProductId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'FundProducts',
          key: 'id',
          as: 'fundProductId',
        }
      }
    }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Transactions')
};