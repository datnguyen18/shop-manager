const Query = require('./api/resolvers/query');
const Mutation = require('./api/resolvers/mutation');
const Category = require('./api/resolvers/category');

const resolvers = { Query, Mutation, Category };
module.exports = resolvers;
