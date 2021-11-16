const { RepositoryComment } = require('../../../infrastructure/repository/repositoryComment');

class GetCommentUseCase {
    constructor() {
        this.repositoryComment = new RepositoryComment();
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