const {gql} = require('apollo-server');
const schema  = gql `
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
    category:Category
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
    getProducts: [Product]
    getProduct(id: Int): Product
    categories: [Category]
  }

  type Mutation {
    addProduct(catId: Int, name: String, description: String, image: String, price: Int): Product
    addCategory(name: String, description: String, image: String): Category
    
  }
`
module.exports= schema;