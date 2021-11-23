const { CreateCommentsUseCase } = require('./createCommentsUseCase');
const { FetchCommentsUseCase } = require('./fetchCommentsUseCase');

class PersistsCommentsUseCase {
    constructor(Dependencias) {
        this.createCommentsUseCase = new CreateCommentsUseCase(Dependencias);
        this.fetchCommentsUseCase = new FetchCommentsUseCase(Dependencias);
    }

    async execute(param) {
        return await this.persistence(param);
    }

    async persistence({ urlFecth, urlIndice }) {
        const persistenceComments = [];
        const data = {
            urlFecth: urlFecth,
            urlIndice: urlIndice,
            urlFilter: 'comments'
        };
        const fetcComments = await this.fetchCommentsUseCase.execute(data);
        for (const element of fetcComments) {
            const populado = this.persistsComments(element);
            persistenceComments.push(populado);
        }

        const Comments = await Promise.all(persistenceComments);
        return Comments;

    }

    async persistsComments(Comment) {
        let populado = await this.createCommentsUseCase.execute(Comment);
        const commentDTO = {
            commentID: populado.id,
            postId: populado.postId,
            name: populado.name,
            updatedAt: populado.updatedAt,
            createdAt: populado.createdAt
        };
        return commentDTO;
    }

}

module.exports = { PersistsCommentsUseCase };

