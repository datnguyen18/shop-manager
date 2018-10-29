const {sequelize} = require('./config');
const Sequelize = require('sequelize');

const Delivery_Address = sequelize.define('Delivery_Address', {
  forename: Sequelize.STRING,
  surname: Sequelize.STRING,
  add1: Sequelize.STRING,
  add2: Sequelize.STRING,
  add3: Sequelize.STRING,
  postcode: Sequelize.STRING,
  phone: Sequelize.STRING,
  email: Sequelize.STRING
}, {});

module.exports = Delivery_Address;