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
    id: Int!
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

  type Order {
    id: Int!
    customerId: Int!
    deliveryAddId: Int!
    registered: Boolean
    paymentType:String
    date: Date
    status: String
    session: String
    total: Int
  }

  type Order_Item{
    id: Int!
    orderId: Int!
    productId: Int!
    quatity: Int!
  }

  type Delivery_Address{
    id: Int!
    forename: String
    surname: String
    add1: String
    add2: String
    add3: String
    postcode: String
    phone: String
    email: String
  }

  type Product {
    id: Int!
    catId: Int!
    name: String!
    description: String!
    image: String!
    price: Int!
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

  input CustomerInput {
    forename: String!
    surename: String!
    add1: String!
    add2: String!
    add3: String!
    postcode: String!
    phone: String!
  }
`;
module.exports = schema;
