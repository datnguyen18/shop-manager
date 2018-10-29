const {sequelize} = require('./config');
const Sequelize = require('sequelize');
const Login = sequelize.define('Login', {
    username: Sequelize.STRING,
    password: Sequelize.STRING
}, {});

module.exports = Login;