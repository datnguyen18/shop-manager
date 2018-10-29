
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('Products',['catId'],{
      type: 'foreign key',
      name: 'fk_product_belongs_category',
      references: {
        table: 'Categories',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    })
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
