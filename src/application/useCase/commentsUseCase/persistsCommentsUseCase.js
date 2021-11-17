const { CreateCommentsUseCase } = require('./createCommentsUseCase');
const { FetchCommentsUseCase } = require('./fetchCommentsUseCase');

class PersistsCommentsUseCase {
    constructor(requestService) {
        //this.requestService = requestService;
        this.createCommentsUseCase = new CreateCommentsUseCase(requestService);
        this.fetchCommentsUseCase = new FetchCommentsUseCase(requestService);
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

