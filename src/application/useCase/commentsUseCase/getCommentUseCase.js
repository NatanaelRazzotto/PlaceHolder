//const { RepositoryComment } = require('../../../infrastructure/repository/repositoryComment');

class GetCommentUseCase {
    constructor({ repositoryComment }) {
        this.repositoryComment = repositoryComment;
    }
    async execute(dataComment) {
        return await this.getRegisterInDB(dataComment);
    }
    async getRegisterInDB(dataComment) {
        const commentPersistido = await this.repositoryComment.findAlCommentFromPost(dataComment);
        return commentPersistido;
    }
}

module.exports = { GetCommentUseCase };