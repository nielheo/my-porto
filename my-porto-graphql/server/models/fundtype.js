module.exports = (sequelize, DataTypes) => {
  const FundType = sequelize.define('FundType', {
    name: { 
      type: DataTypes.STRING,
      allowNull: false, 
    },
  });
  FundType.associate = (models) => {
    FundType.hasMany(models.FundProduct, {
      foreignKey: 'fundTypeId',
      as: 'fundProducts'
    })
  };
  
  return FundType;
};