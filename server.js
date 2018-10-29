const Product = require('./api/models/product');
const Category = require('./api/models/category');
const {ApolloServer, gql} = require('apollo-server');

const typeDefs = gql `
  scalar Date

  type Product {
    id: Int
    catId: Int
    name: String
    description: String
    image: String
    price: Int
    createdAt:Date
    updatedAt:Date
  }

  type Category{
    id: Int
    name: String
    description: String
    image: String
    createdAt: Date
    Products: [Product]
    updatedAt: Date
  }
  
  type Query {
    products: [Product]
    categories: [Category]
  }

  type Mutation {
    createProduct(catId: Int, name: String, description: String, image: String, price: Int): Product
  }
`

const resolvers = {
  Query: {
    products: () => Product.findAll(),
    categories: () => Category.findAll({
      include: [Product]
    })

  }

}

const server = new ApolloServer({typeDefs, resolvers});
server.listen().then(({url}) => {
  console.log(`server ready at ${url}`)
})