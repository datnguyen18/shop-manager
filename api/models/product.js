const {sequelize} = require('./config');
const Sequelize = require('sequelize');
const Product = sequelize.define('Product', {
  name: Sequelize.STRING,
  description: Sequelize.STRING,
  image: Sequelize.STRING,
  price: Sequelize.INTEGER
}, {});

module.exports = Product;
