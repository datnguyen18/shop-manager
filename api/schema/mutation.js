const { gql } = require('apollo-server');

const Mutation = gql`
  type Mutation{
    addProduct(catId: Int!, name: String!, description: String!, image: String!, price: Int!): Product
    updateProduct(id: Int,catId: Int, name: String, description: String, image: String, price: Int): Product
    deleteProduct(id: Int,catId: Int, name: String, description: String, image: String, price: Int): Product
    addCategory(name: String, description: String, image: String): Category

    addCustomer(input: CustomerInput!): Customer
    updateCustomer(id: Int!, input: CustomerInput): Customer
    deleteCustomer(id: Int!): Customer

    addOrder(input: OrderInput!): Order
  }

  input CustomerInput{
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

  input OrderInput{
    customerId: Int!
    deliveryAddId: Int!
    registered: Boolean
    paymentType:String
    date: Date
    status: String
    session: String
    total: Int
  }
`;

module.exports = Mutation;
