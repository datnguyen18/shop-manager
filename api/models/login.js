'use strict';
module.exports = (sequelize, DataTypes) => {
  const Login = sequelize.define('Login', {
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  Login.associate = function(models) {
    // associations can be defined here
  };
  return Login;
};