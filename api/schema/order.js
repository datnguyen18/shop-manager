const { gql } = require('apollo-server');

const Order = gql`
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
`;

module.exports = Order;
