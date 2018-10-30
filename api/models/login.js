const Sequelize = require('sequelize');
const { sequelize } = require('./config');

const Login = sequelize.define('Login', {
  username: Sequelize.STRING,
  password: Sequelize.STRING,
}, {});

module.exports = Login;
