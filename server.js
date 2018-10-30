const { ApolloServer } = require('apollo-server');
const schema = require('./schema');

const resolvers = require('./resolvers');

const typeDefs = schema;

const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => {
  console.log(`server ready at ${url}`);
});
