//const { RepositoryPost } = require('../../../infrastructure/repository/repositoryPost');

class GetPostUseCase {
    constructor({ repositoryPost }) {
        this.repositoryPost = repositoryPost;
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