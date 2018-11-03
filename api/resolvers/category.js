const Product = require('../models/product');

const resolvers = {
  products: (parent, args) => Product.find({
    where: {
      name: args.query.name,
    },
  }),
};

module.export = resolvers;
