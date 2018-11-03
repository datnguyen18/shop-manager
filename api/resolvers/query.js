const Category = require('../models/category');
const Product = require('../models/product');

const resolvers = {
  categories: () => Category.findAll({
    include: [Product],
  }),
  product: (parent, args) => Product.findById(args.id),
};

module.exports = resolvers;
