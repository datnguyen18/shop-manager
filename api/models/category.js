const Sequelize = require('sequelize');
const { sequelize } = require('./config');

const Product = require('./product');

const Category = sequelize.define('Category', {
  name: Sequelize.STRING,
  description: Sequelize.STRING,
  image: Sequelize.STRING,
}, {});

Category.hasMany(Product, {
  foreignKey: 'catId',
});

module.exports = Category;
