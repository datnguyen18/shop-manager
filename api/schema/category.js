const { gql } = require('apollo-server');

const Category = gql`
  type Category{
    id: Int
    name: String
    description: String
    image: String
    createdAt: Date
    Products: [Product]
    updatedAt: Date
  }
`;

module.exports = Category;
