const Product = require('../models/product');
const Category = require('../models/category');
const Customer = require('../models/customer');
const { promisify } = require('../helpers');

const resolvers = {
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
};

module.exports = resolvers;
