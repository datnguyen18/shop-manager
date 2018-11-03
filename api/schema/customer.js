const { gql } = require('apollo-server');

const Customer = gql`
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
`;

module.exports = Customer;
