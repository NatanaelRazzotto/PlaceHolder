//const { RepositoryComment } = require('../../../infrastructure/repository/repositoryComment');
const { Comment } = require('../../../domain/comment');
class CreateCommentsUseCase {
    constructor({ repositoryComment }) {
        this.repositoryComment = repositoryComment;
    }

    async execute(dataComment) {
        return await this.preparCreateRegisterDB(dataComment);
    }
    async preparCreateRegisterDB(dataComment) {
        const commentObject = this.preparObject(dataComment);
        const commentPersistido = await this.repositoryComment.create(commentObject);
        return commentPersistido;
    }

    preparObject({ id, postId, name, email, body }) {
        const objectComment = new Comment(id, postId, name, email, body);
        /*const Object = {
            id: dataComment.id,
            postId: dataComment.postId,
            name: dataComment.name,
            email: dataComment.email,
            body: dataComment.body
        }*/
        return objectComment;
    }
}

module.exports = { CreateCommentsUseCase };