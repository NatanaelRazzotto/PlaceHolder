//const { RepositoryPost } = require('../../../infrastructure/repository/repositoryPost');
const { Post } = require('../../../domain/post');

class CreatePostsUseCase {
    constructor({ repositoryPost }) {
        this.repositoryPost = repositoryPost;
    }

    async execute(dataPost) {
        return await this.preparCreateRegisterDB(dataPost);
    }
    async preparCreateRegisterDB(dataPost) {
        const postObject = this.preparObject(dataPost);
        const postPersistido = await this.repositoryPost.create(postObject);
        return postPersistido;
    }

    preparObject({ id, userId, title, body }) {
        const objectPost = new Post(id, userId, title, body);
        /* const Object = {
             id: dataPost.id,
             userId: dataPost.userId,
             title: dataPost.title,
             body: dataPost.body
         }*/
        return objectPost;
    }
}

module.exports = { CreatePostsUseCase };