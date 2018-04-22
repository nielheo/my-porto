module.exports = (sequelize, DataTypes) => {
  const FundProduct = sequelize.define('FundProduct', {
    code: { 
      type: DataTypes.STRING,
      allowNull: false,
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
  
  return FundProduct;
};