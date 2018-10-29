const {sequelize} = require('./config');
const Sequelize = require('sequelize');
const Product = require('./product');

const Order_Items = sequelize.define('Order_Items', {
  quantity: Sequelize.INTEGER
}, {});

Order_Items.belongsTo(Product, {foreignKey: "productId"});

module.exports = Order_Items;