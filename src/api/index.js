const project = require('./project')
const loaders = require('./loaders')
const merge = require('lodash/merge')

module.exports = {
  typeDefs: [
    project.typeDefs
  ],
  resolvers: project.resolvers,
  context: {
    models: {
      project: project.model
    },
    loaders: loaders()
  }
}
