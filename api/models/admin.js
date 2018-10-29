const {sequelize} = require('./config');

exports.Admin = sequelize.define('Admin', {
  username: DataTypes.STRING,
  password: DataTypes.STRING
}, {});