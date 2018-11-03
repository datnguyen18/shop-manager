const { gql } = require('apollo-server');

const Product = gql`
  type Product {
    id: Int!
    catId: Int!
    name: String!
    description: String!
    image: String!
    price: Int!
    category: Category
    createdAt:Date
    updatedAt:Date
  }
`;

module.exports = Product;
