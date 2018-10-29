const {sequelize} = require('./config');
exports.Login = sequelize.define('Login', {
    username: DataTypes.STRING,
    password: DataTypes.STRING
}, {});
