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
    Order.belongsTo(models.Delivery_Address, {foreignKey: "delivery_add_id"})
  };
  return Order;
};