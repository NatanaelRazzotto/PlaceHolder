const { RepositoryPost } = require('../../../infrastructure/repository/repositoryPost');

class GetPostUseCase {
    constructor() {
        this.repositoryPost = new RepositoryPost();
    }
    async execute(dataPost) {
        return await this.getRegisterInDB(dataPost);
    }
    async getRegisterInDB(dataPost) {
        const postPersistido = await this.repositoryPost.findAllPostFromUser(dataPost);
        return postPersistido;
    }
}

module.exports = { GetPostUseCase };