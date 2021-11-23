const { CreatePostsUseCase } = require('./createPostsUseCase');
const { FetchPostUseCase } = require('./fetchPostsUseCase');
const { PersistsCommentsUseCase } = require('../../useCase/commentsUseCase/persistsCommentsUseCase');

class PersistsPostUseCase {
    constructor(Dependencias) {
        this.createPostsUseCase = new CreatePostsUseCase(Dependencias);
        this.fetchPostsUseCase = new FetchPostUseCase(Dependencias);
        this.persistsCommentsUseCase = new PersistsCommentsUseCase(Dependencias);
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
            const populado = this.persistsPost(element);
            persistencePost.push(populado);
        }

        const Post = await Promise.all(persistencePost);
        return Post;

    }

    async persistsPost(Post) {
        let populado = await this.createPostsUseCase.execute(Post);
        const postDTO = {
            postID: populado.id,
            userId: populado.userId,
            title: populado.title,
            dependentes: await this.persistsDependentes(populado),
            updatedAt: populado.updatedAt,
            createdAt: populado.createdAt
        };
        return postDTO;
    }

    async persistsDependentes(Post) {
        const data = {
            urlFecth: 'https://jsonplaceholder.typicode.com/posts',
            urlIndice: Post.id
        };
        const dependentes = {
            Comments: await this.persistsCommentsUseCase.execute(data)
        }
        return dependentes;
    }

}

module.exports = { PersistsPostUseCase };

