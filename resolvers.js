const Product = require('./api/models/product');
const Category = require('./api/models/category');
const resolvers= {
  Query: {
    products: () => Product.findAll(),
    categories: () => Category.findAll({
      include: [Product]
    })
  },

  Mutation: {
    addProduct: (parent, args ) => Product.create(args),
    addCategory: (parent, args) => Category.create(args),
  }

}
module.exports= resolvers;