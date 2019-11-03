const DataLoader = require('dataloader');
const Project = require('./project/project.model');
const _ = require('lodash');

const createProjectLoader = () => {
    return new DataLoader(projectIds => {
        return Project.find({_id: {$in: projectIds}})
          .exec()
          .then(projects => {
            console.log('projects loader batch: ', projectIds.length)
            const projectsById = _.keyBy(projects, '_id')
            return projectIds.map(projectId => projectsById[projectId])
          })
      })
}

const craeteTaskLoader = () => {
    // create Task loader
}

const createRepoLoader = () => {
    // create Github loader
}

module.exports = () => {
    return {
        project: createProjectLoader(),
        task: craeteTaskLoader(),
        repo: createRepoLoader()
    };
};
