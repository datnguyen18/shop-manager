'use strict';
module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define('Customer', {
    forename: DataTypes.STRING,
    surname: DataTypes.STRING,
    add1: DataTypes.STRING,
    add2: DataTypes.STRING,
    add3: DataTypes.STRING,
    postcode: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    registerd: DataTypes.STRING
  }, {});
  Customer.associate = function(models) {
    Customer.hasMany(models.Order, {foreignKey: "customerId"});
    
  };
  return Customer;
};