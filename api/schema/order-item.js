const { gql } = require('apollo-server');

const OrderItem = gql`
  type Order_Item{
    id: Int!
    orderId: Int!
    productId: Int!
    quatity: Int!
  }
`;

module.exports = OrderItem;
