module.exports = (sequelize, DataTypes) => {
  const FundProduct = sequelize.define('FundProduct', {
    code: { 
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    name: { 
      type: DataTypes.STRING,
      allowNull: false 
    },
  });
  FundProduct.associate = (models) => {
    FundProduct.belongsTo(models.FundType, {
      foreignKey: 'fundTypeId',
      onDelete: 'CASCADE',
    });
  };
  FundProduct.associate = (models) => {
    FundProduct.hasMany(models.Transaction, {
      foreignKey: 'fundProductId',
      as: 'transactions'
    })
  };
  
  return FundProduct;
};