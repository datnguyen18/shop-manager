const {sequelize} = require('./config');
const Delivery_Address = require('./delivery_address');
const Order_Items = require('./order_items');
exports.Order = sequelize.define('Order', {
  registered: DataTypes.BOOLEAN,
  paymentType: DataTypes.STRING,
  date: DataTypes.DATE,
  status: DataTypes.STRING,
  session: DataTypes.STRING,
  total: DataTypes.INTEGER
}, {});
Order.belongsTo(Delivery_Address, {
  foreignKey: "deliveryAddId"
});
Order.hasMany(Order_Items, {
  foreignKey: "orderId"
});