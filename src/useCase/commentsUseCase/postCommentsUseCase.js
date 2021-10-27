const { RepositoryComment } = require('../../repository/sequelize/repositoryClass/repositoryComment');

class PostCommentsUseCase {
    constructor() {
        this.repositoryComment = new RepositoryComment();
    }

    async execute(dataComment) {
        return await this.preparCreateRegisterDB(dataComment);
    }
    async preparCreateRegisterDB(dataComment) {
        const commentObject = this.preparObject(dataComment);
        const commentPersistido = await this.repositoryComment.create(commentObject);
        return commentPersistido;
    }

    preparObject(dataComment) {
        const Object = {
            id: dataComment.id,
            postId: dataComment.postId,
            name: dataComment.name,
            email: dataComment.email,
            body: dataComment.body
        }
        return Object;
    }
}

module.exports = { PostCommentsUseCase };