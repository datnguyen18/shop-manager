const Sequelize = require('sequelize');
const { sequelize } = require('./config');

const Order = require('./order');

const Customer = sequelize.define('Customer', {
  forename: Sequelize.STRING,
  surname: Sequelize.STRING,
  add1: Sequelize.STRING,
  add2: Sequelize.STRING,
  add3: Sequelize.STRING,
  postcode: Sequelize.STRING,
  phone: Sequelize.STRING,
  email: Sequelize.STRING,
  registerd: Sequelize.STRING,
}, {});

Customer.hasMany(Order, {
  foreignKey: 'customerId',
});

module.exports = Customer;
