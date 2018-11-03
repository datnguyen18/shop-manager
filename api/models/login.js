const Sequelize = require('sequelize');
const Customer = require('./customer');
const { sequelize } = require('./config');

const Login = sequelize.define('Login', {
  username: Sequelize.STRING,
  password: Sequelize.STRING,
}, {});

Login.belongsTo(Customer);

module.exports = Login;
