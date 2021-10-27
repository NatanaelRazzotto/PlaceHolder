const { RepositoryPost } = require('../../repository/sequelize/repositoryClass/repositoryPost');

class postPostsUseCase {
    constructor() {
        this.repositoryPost = new RepositoryPost();
    }

    async execute(dataPost) {
        return await this.preparCreateRegisterDB(dataPost);
    }
    async preparCreateRegisterDB(dataPost) {
        const postObject = this.preparObject(dataPost);
        const postPersistido = await this.repositoryPost.create(postObject);
        return postPersistido;
    }

    preparObject(dataPost) {
        const Object = {
            id: dataPost.id,
            userId: dataPost.userId,
            title: dataPost.title,
            body: dataPost.body
        }
        return Object;
    }
}

module.exports = { PostCompanyUseCase };