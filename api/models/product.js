const Sequelize = require('sequelize');
const { sequelize } = require('./config');

const Product = sequelize.define('Product', {
  name: Sequelize.STRING,
  description: Sequelize.STRING,
  image: Sequelize.STRING,
  price: Sequelize.INTEGER,
}, {});

module.exports = Product;
