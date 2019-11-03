const project = async (_, args, ctx) => {
    const project = await ctx.loaders.project.load(args.input.id);
    if (!project) {
        throw new Error('Project Does not Exist');
    }

    return project;
}

const projects = (_, __, ctx) => {
    return ctx.models.project.find({}).exec();
}

const newProject = (_, args, ctx) => {
    const data =  ctx.models.project.create(args.input);
    // console.log(data);
    return data;
}

module.exports = {
    Query: {
        project,
        projects
    },
    Mutation: {
        newProject
    }
}