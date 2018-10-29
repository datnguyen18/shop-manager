const {sequelize} = require('./config');
const Sequelize = require('sequelize');

const Admin = sequelize.define('Admin', {
  username: Sequelize.STRING,
  password: Sequelize.STRING
}, {});

module.exports = Admin;