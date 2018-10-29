const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const Category = require('./api/models/category');
const {ApolloServer, gql} = require('apollo-server');
app.use(morgan('dev'));

app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json());
const typeDefs = gql `
  scalar Date

  type Category {
    id: Int
    name:String
    description:String
    image:String
    createdAt:Date
    updatedAt:Date
  }
  type Query {
    categories: [Category]
  }
`

const resolvers = {
  Query: {
    categories: () => categories.Category.findAll()
  }
}

module.exports = app;