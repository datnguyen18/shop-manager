const Product = require('./api/models/product');
const Category = require('./api/models/category');
const Customer = require('./api/models/customer');
const promisify = require('./api/helpers/');

const resolvers = {
  Query: {
    categories: () => Category.findAll({
      include: [Product],
    }),
  },

  Mutation: {
    addProduct: (parent, args) => Product.create(args),
    updateProduct: (parent, { id, ...args }) => Product
      .find({
        where: { id },
      })
      .then(product => product.update(args)),
    deleteProduct: (parent, { id }) => Product
      .find({
        where: { id },
      })
      .then(product => product.destroy()),
    addCategory: (parent, args) => Category.create(args),
    addCustomer: (parent, args) => Customer.create(args.input),
    updateCustomer: (parent, { id, ...args }) => promisify(Customer.findById(id))
      .then(customer => customer.update(args)),
    deleteCustomer: (parent, { id }) => promisify(Customer.findById(id))
      .then(customer => customer.destroy()),
  },

};
module.exports = resolvers;
