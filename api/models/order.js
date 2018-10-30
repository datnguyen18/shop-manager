const Sequelize = require('sequelize');
const { sequelize } = require('./config');

const Delivery_Address = require('./delivery_address');
const Order_Items = require('./order_items');

const Order = sequelize.define('Order', {
  registered: Sequelize.BOOLEAN,
  paymentType: Sequelize.STRING,
  date: Sequelize.DATE,
  status: Sequelize.STRING,
  session: Sequelize.STRING,
  total: Sequelize.INTEGER,
}, {});
Order.belongsTo(Delivery_Address, {
  foreignKey: 'deliveryAddId',
});
Order.hasMany(Order_Items, {
  foreignKey: 'orderId',
});

module.exports = Order;
