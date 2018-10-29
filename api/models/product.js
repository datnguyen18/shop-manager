const {sequelize} = require('./config');
exports.Product = sequelize.define('Product', {
  name: DataTypes.STRING,
  description: DataTypes.STRING,
  image: DataTypes.STRING,
  price: DataTypes.INTEGER
}, {});
