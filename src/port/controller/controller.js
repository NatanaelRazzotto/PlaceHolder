
const { PersistsAlbumUseCase } = require('../../application/useCase/albumsUseCase/persistsAlbumUseCase');
const { GetAlbumUseCase } = require('../../application/useCase/albumsUseCase/getAlbumUseCase');

const { PersistsCommentsUseCase } = require('../../application/useCase/commentsUseCase/persistsCommentsUseCase');
const { GetCommentUseCase } = require('../../application/useCase/commentsUseCase/getCommentUseCase');

const { PersistsPhotosUseCase } = require('../../application/useCase/photosUseCase/persistsPhotosUseCase');
const { GetPhotoUseCase } = require('../../application/useCase/photosUseCase/getPhotoUseCase');

const { PersistsPostUseCase } = require('../../application/useCase/postsUseCase/persistsPostUseCase');
const { GetPostUseCase } = require('../../application/useCase/postsUseCase/getPostUseCase');

const { PersistsTodosUseCase } = require('../../application/useCase/todosUseCase/persistsTodosUseCase');
const { GetTodosUseCase } = require('../../application/useCase/todosUseCase/getTodosUseCase');

const { PersistsUserUseCase } = require('../../application/useCase/userUseCase/persistsUserUseCase');
const { GetUserUseCase } = require('../../application/useCase/userUseCase/getUserUseCase');

const { RequestService } = require('../../servicesApplication/requestService');

class Controller {
    constructor() {
        this.requestService = new RequestService()//  this.persistsUserUseCase = new PersistsUserUseCase();
    }
    // #region User Operacoes 
    async persistsDataUsersDependences(search) {
        const persistsUserUseCase = new PersistsUserUseCase(this.requestService);
        const data = {
            max: search.maxIndice
        };
        const userPersists = await persistsUserUseCase.execute(data);
        return userPersists;
    }
    async getDataUserDependences(search) {
        const getUserUseCase = new GetUserUseCase();
        const data = {
            id: search.id
        };
        const userPersists = await getUserUseCase.execute(data);
        return userPersists;
    }
    // #endregion
    // #region Todos Operacoes
    async persistsDataTodosDependences(search) {
        const persistsTodosUseCase = new PersistsTodosUseCase(this.requestService);
        const data = {
            urlFecth: 'https://jsonplaceholder.typicode.com/users',
            urlIndice: search.id
        };
        const todosPersists = await persistsTodosUseCase.execute(data);
        return todosPersists;
    }
    async getDataTodosDependences(search) {
        const getTodosUseCase = new GetTodosUseCase();
        const data = {
            userId: search.id
        };
        const todosPersists = await getTodosUseCase.execute(data);
        return todosPersists;
    }
    // #endregion
    // #region Photos Operacoes 
    async persistsDataPostsDependences(search) {
        const persistsPostUseCase = new PersistsPostUseCase(this.requestService);
        const data = {
            urlFecth: 'https://jsonplaceholder.typicode.com/users',
            urlIndice: search.id
        };
        const postPersists = await persistsPostUseCase.execute(data);
        return postPersists;
    }
    async getDataPostsDependences(search) {
        const getPostUseCase = new GetPostUseCase();
        const data = {
            userId: search.id
        };
        const postsPersists = await getPostUseCase.execute(data);
        return postsPersists;
    }
    // #endregion
    // #region Photos Operacoes 
    async persistsDataPhotosDependences(search) {
        const persistsPhotosUseCase = new PersistsPhotosUseCase(this.requestService);
        const data = {
            urlFecth: 'https://jsonplaceholder.typicode.com/albums',
            urlIndice: search.id
        };
        const photoPersists = await persistsPhotosUseCase.execute(data);
        return photoPersists;
    }
    async getDataPhotosDependences(search) {
        const getPhotoUseCase = new GetPhotoUseCase();
        const data = {
            albumId: search.id
        };
        const albumPersists = await getPhotoUseCase.execute(data);
        return albumPersists;
    }
    // #endregion
    // #region Album Operacoes 
    async persistsDataCommentsDependences(search) {
        const persistsCommentsUseCase = new PersistsCommentsUseCase(this.requestService);
        const data = {
            urlFecth: 'https://jsonplaceholder.typicode.com/posts',
            urlIndice: search.id
        };
        const commentsPersists = await persistsCommentsUseCase.execute(data);
        return commentsPersists;
    }
    async getDataCommentsDependences(search) {
        const getCommentUseCase = new GetCommentUseCase();
        const data = {
            postId: search.id
        };
        const albumPersists = await getCommentUseCase.execute(data);
        return albumPersists;
    }
    // #endregion
    // #region Album Operacoes 
    async persistsDataAlbumDependences(search) {
        const persistsAlbumUseCase = new PersistsAlbumUseCase(this.requestService);
        const data = {
            urlFecth: 'https://jsonplaceholder.typicode.com/users',
            urlIndice: search.id
        };
        const albumPersists = await persistsAlbumUseCase.execute(data);
        return albumPersists;
    }
    async getDataAlbumDependences(search) {
        const getAlbumUseCase = new GetAlbumUseCase();
        const data = {
            userId: search.id
        };
        const albumPersists = await getAlbumUseCase.execute(data);
        return albumPersists;
    }
    // #endregion


}

module.exports = { Controller };