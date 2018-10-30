const Sequelize = require('sequelize');
const { sequelize } = require('./config');

const Admin = sequelize.define('Admin', {
  username: Sequelize.STRING,
  password: Sequelize.STRING,
}, {});

module.exports = Admin;
