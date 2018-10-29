'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    registered: DataTypes.BOOLEAN,
    paymentType: DataTypes.STRING,
    date: DataTypes.DATE,
    status: DataTypes.STRING,
    session: DataTypes.STRING,
    total: DataTypes.INTEGER
  }, {});
  Order.associate = function(models) {
    Order.belongsTo(models.Delivery_Address, {foreignKey: "deliveryAddId"});
    Order.hasMany(models.Order_Items, {foreignKey:"orderId"});
  };
  return Order;
};