'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order_Items = sequelize.define('Order_Items', {
    quantity: DataTypes.INTEGER
  }, {});
  Order_Items.associate = function(models) {
    // associations can be defined here
    Order_Items.belongsTo(models.Product, {foreignKey: "productId"});
  };
  return Order_Items;
};