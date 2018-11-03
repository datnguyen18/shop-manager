const { gql } = require('apollo-server');

const Login = gql`
  type Login{
    id: Int!
    username: String
    password: String
  }
`;

module.exports = Login;
