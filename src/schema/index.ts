const { gql } = require('apollo-server-express')
const queryType = require('./query.ts')
const { Demo, DemoQL } = require('./demo/index.ts')

const typeDefs = gql(DemoQL + queryType)

const resolvers = {
  Query: {
    ...Demo.Query,
  },
  // Mutation: {},
};

module.exports = {
  typeDefs, resolvers
}

export { }