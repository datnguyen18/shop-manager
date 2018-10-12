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
    // associations can be defined here
  };
  return Order;
};