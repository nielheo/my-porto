'use strict';
module.exports = (sequelize, DataTypes) => {
  const Transaction = sequelize.define('Transaction', {
    reffNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    transactionDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    isSubscribe: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    transactionValue: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    transactionFee: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    nav: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    unit: {
      type: DataTypes.DECIMAL,
      allowNull:false,
    }
  });
  Transaction.associate = function(models) {
    Transation.belongsTo(models.FundProduct, {
      foreignKey: 'fundProductId',
      onDelete: 'CASCADE',
    });
  };
  return Transaction;
};