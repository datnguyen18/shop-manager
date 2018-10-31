const { gql } = require('apollo-server');

const schema = gql`
  scalar Date

  type Query {
    products: [Product]
    product(id: Int): Product
    categories: [Category]
  }

  type Mutation {
    addProduct(catId: Int!, name: String!, description: String!, image: String!, price: Int!): Product
    updateProduct(id: Int,catId: Int, name: String, description: String, image: String, price: Int): Product
    deleteProduct(id: Int,catId: Int, name: String, description: String, image: String, price: Int): Product
    addCategory(name: String, description: String, image: String): Category
    
  }

  type Customer{
    id: Int
    forename: String
    surname: String
    add1: String
    add2: String
    add3: String
    postcode: String
    phone: String
    email: String
    registerd: Boolean
  }

  type Product {
    id: Int!
    catId: Int!
    name: String!
    description: String!
    image: String!
    price: Int!
    createdAt:Date!
    updatedAt:Date!
    category:Category!
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

  input CustomerInput {
    forename: String!
    surename: String!
    add1: String!
    add2: String!
    add3: String!
    postcode: String!
    phone: String
  }
`;
module.exports = schema;
