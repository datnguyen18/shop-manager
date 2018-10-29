'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Delivery_Addresses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      forename: {
        type: Sequelize.STRING
      },
      surname: {
        type: Sequelize.STRING
      },
      add1: {
        type: Sequelize.STRING
      },
      add2: {
        type: Sequelize.STRING
      },
      add3: {
        type: Sequelize.STRING
      },
      postcode: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Delivery_Addresses');
  }
};