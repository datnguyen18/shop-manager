const { gql } = require('apollo-server');

const Query = gql`
  scalar Date
  
  type Query {
    login(id: Int!): Login
    logins: [Login]
    products: [Product]
    product(id: Int): Product
    categories: [Category]
  }
`;

module.exports = Query;
