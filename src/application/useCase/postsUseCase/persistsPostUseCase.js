const { User } = require('../../../domain/user');
const { CreatePostsUseCase } = require('./createPostsUseCase');
const { FetchPostUseCase } = require('./fetchPostsUseCase');

class PersistsPostUseCase {
    constructor(requestService) {
        //this.requestService = requestService;
        this.createPostsUseCase = new CreatePostsUseCase(requestService);
        this.fetchPostsUseCase = new FetchPostUseCase(requestService);
    }

    async execute(param) {
        return await this.persistence(param);
    }

    async persistence({ urlFecth, urlIndice }) {
        const persistencePost = [];
        const data = {
            urlFecth: urlFecth,
            urlIndice: urlIndice,
            urlFilter: 'posts'
        };
        const fetchPosts = await this.fetchPostsUseCase.execute(data);
        for (const element of fetchPosts) {
            const populado = await this.persistsPost(element);
            persistencePost.push(populado);
        }

        return persistencePost;

    }

    async persistsPost(Post) {
        let populado = await this.createPostsUseCase.execute(Post);
        //populado.depentes = await this.persistsDependentes(populado);
        return populado;
    }

    async persistsDependentes(User) {

    }

}

module.exports = { PersistsPostUseCase };

