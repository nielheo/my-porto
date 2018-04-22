module.exports = (sequelize, DataTypes) => {
  const FundType = sequelize.define('FundType', {
    name: { 
      type: DataTypes.STRING,
      allowNull: false, 
    },
  });
  FundType.associate = (models) => {
    Todo.hasMany(model.FundProduct, {
      foreignKey: 'fundTypeId',
      as: 'fundProducts'
    })
  };
  
  return FundType;
};