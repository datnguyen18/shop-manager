const {sequelize} = require('./config');
exports.Order_Items = sequelize.define('Order_Items', {
  quantity: DataTypes.INTEGER
}, {});

Order_Items.belongsTo(models.Product, {foreignKey: "productId"});
