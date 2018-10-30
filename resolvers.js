const Product = require('./api/models/product');
const Category = require('./api/models/category');
const resolvers= {
  Query: {
    getProducts: () => Product.findAll(),
    getProduct: (parent, args) => Product.find({
      where: {
        id: args.id
      }
    }),
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