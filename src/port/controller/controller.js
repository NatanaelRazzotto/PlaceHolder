/*const { FetchUserUseCase } = require('../../../src/application/useCase/userUseCase/fetchUserUseCase');
const { FetchPostUseCase } = require('../../../src/application/useCase/postsUseCase/fetchPostsUseCase');
const { PostUserUseCase } = require('../../application/useCase/userUseCase/createUserUseCase')
const { RequestService } = require('../../servicesApplication/requestService');
const { RepositoryUser } = require('../../infrastructure/repository/repositoryUser');*/

const { PersistsAlbumUseCase } = require('../../application/useCase/albumsUseCase/persistsAlbumUseCase');
const { PersistsCommentsUseCase } = require('../../application/useCase/commentsUseCase/persistsCommentsUseCase');
const { PersistsPhotosUseCase } = require('../../application/useCase/photosUseCase/persistsPhotosUseCase');
const { PersistsPostUseCase } = require('../../application/useCase/postsUseCase/persistsPostUseCase');
const { PersistsTodosUseCase } = require('../../application/useCase/todosUseCase/persistsTodosUseCase');
const { PersistsUserUseCase } = require('../../application/useCase/userUseCase/persistsUserUseCase');
const { RequestService } = require('../../servicesApplication/requestService');

class Controller {
    constructor() {
        this.requestService = new RequestService()//  this.persistsUserUseCase = new PersistsUserUseCase();
    }

    async persistsDataUsersDependences(search) {
        const persistsUserUseCase = new PersistsUserUseCase(this.requestService);
        const data = {
            max: search.maxIndice
        };
        const userPersists = await persistsUserUseCase.execute(data);
        return userPersists;
    }
    async persistsDataTodosDependences(search) {
        const persistsTodosUseCase = new PersistsTodosUseCase(this.requestService);
        const data = {
            urlFecth: 'https://jsonplaceholder.typicode.com/users',
            urlIndice: search.id
        };
        const todosPersists = await persistsTodosUseCase.execute(data);
        return todosPersists;
    }
    async persistsDataPostsDependences(search) {
        const persistsPostUseCase = new PersistsPostUseCase(this.requestService);
        const data = {
            urlFecth: 'https://jsonplaceholder.typicode.com/users',
            urlIndice: search.id
        };
        const postPersists = await persistsPostUseCase.execute(data);
        return postPersists;
    }
    async persistsDataPhotosDependences(search) {
        const persistsPhotosUseCase = new PersistsPhotosUseCase(this.requestService);
        const data = {
            urlFecth: 'https://jsonplaceholder.typicode.com/albums',
            urlIndice: search.id
        };
        const photoPersists = await persistsPhotosUseCase.execute(data);
        return photoPersists;
    }
    async persistsDataCommentsDependences(search) {
        const persistsCommentsUseCase = new PersistsCommentsUseCase(this.requestService);
        const data = {
            urlFecth: 'https://jsonplaceholder.typicode.com/posts',
            urlIndice: search.id
        };
        const commentsPersists = await persistsCommentsUseCase.execute(data);
        return commentsPersists;
    }
    async persistsDataAlbumDependences(search) {
        const persistsAlbumUseCase = new PersistsAlbumUseCase(this.requestService);
        const data = {
            urlFecth: 'https://jsonplaceholder.typicode.com/users',
            urlIndice: search.id
        };
        const albumPersists = await persistsAlbumUseCase.execute(data);
        return albumPersists;
    }

}

module.exports = { Controller };