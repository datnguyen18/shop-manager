const {sequelize} = require('./config');

exports.Category = sequelize.define('Category', {
  name: DataTypes.STRING,
  description: DataTypes.STRING,
  image: DataTypes.STRING
}, {});

Category.hasMany(models.Product, {
  foreignKey: "catId"
});
