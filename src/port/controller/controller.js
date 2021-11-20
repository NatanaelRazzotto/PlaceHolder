
const { PersistsAlbumUseCase } = require('../../application/useCase/albumsUseCase/persistsAlbumUseCase');
const { GetAlbumUseCase } = require('../../application/useCase/albumsUseCase/getAlbumUseCase');
const { RepositoryAlbum } = require('../../infrastructure/repository/repositoryAlbum');

const { PersistsCommentsUseCase } = require('../../application/useCase/commentsUseCase/persistsCommentsUseCase');
const { GetCommentUseCase } = require('../../application/useCase/commentsUseCase/getCommentUseCase');
const { RepositoryComment } = require('../../infrastructure/repository/repositoryComment');

const { PersistsPhotosUseCase } = require('../../application/useCase/photosUseCase/persistsPhotosUseCase');
const { GetPhotoUseCase } = require('../../application/useCase/photosUseCase/getPhotoUseCase');
const { RepositoryPhoto } = require('../../infrastructure/repository/repositoryPhoto');

const { PersistsPostUseCase } = require('../../application/useCase/postsUseCase/persistsPostUseCase');
const { GetPostUseCase } = require('../../application/useCase/postsUseCase/getPostUseCase');
const { RepositoryPost } = require('../../infrastructure/repository/repositoryPost');

const { PersistsTodosUseCase } = require('../../application/useCase/todosUseCase/persistsTodosUseCase');
const { GetTodosUseCase } = require('../../application/useCase/todosUseCase/getTodosUseCase');
const { RepositoryTodos } = require('../../infrastructure/repository/repositoryTodos');

const { PersistsUserUseCase } = require('../../application/useCase/userUseCase/persistsUserUseCase');
const { GetUserUseCase } = require('../../application/useCase/userUseCase/getUserUseCase');
const { RepositoryUser } = require('../../infrastructure/repository/repositoryUser');

const { GetAndressUseCase } = require('../../application/useCase/andressUseCase/getAndressUseCase');
const { RepositoryAddress } = require('../../infrastructure/repository/repositoryAndress');

const { GetCompanyUseCase } = require('../../application/useCase/companyUseCase/getCompanyUseCase');
const { RepositoryCompany } = require('../../infrastructure/repository/repositoryCompany');

const { RequestService } = require('../../servicesApplication/requestService');

class Controller {
    constructor() {
        this.Dependencias = {
            requestService: new RequestService(),
            repositoryUser: new RepositoryUser(),
            repositoryAddress: new RepositoryAddress(),
            repositoryCompany: new RepositoryCompany(),
            repositoryPost: new RepositoryPost(),
            repositoryComment: new RepositoryComment(),
            repositoryAlbum: new RepositoryAlbum(),
            repositoryPhoto: new RepositoryPhoto(),
            repositoryTodos: new RepositoryTodos(),
        }
        // this.requestService = new RequestService();
        // this.repositoryUser = new RepositoryUser();
        // this.repositoryAddress = new RepositoryAddress();
        // this.repositoryCompany = new RepositoryCompany();
        // this.repositoryPost = new RepositoryPost();
        // this.repositoryComment = new RepositoryComment();
        // this.repositoryAlbum = new RepositoryAlbum();
        // this.repositoryPhoto = new RepositoryPhoto();
        // this.repositoryTodos = new RepositoryTodos();
    }
    // #region User Operacoes 
    async persistsDataUsersDependences(search) {
        const persistsUserUseCase = new PersistsUserUseCase(this.Dependencias);

        const data = {
            max: search.maxIndice
        };
        const userPersists = await persistsUserUseCase.execute(data);
        return userPersists;
    }
    async getDataUserDependences(search) {
        const getUserUseCase = new GetUserUseCase(this.Dependencias);
        const data = {
            id: search.id
        };
        const userPersists = await getUserUseCase.execute(data);
        return userPersists;
    }
    async getDataAndressDependences(search) {
        const getAndressUseCase = new GetAndressUseCase(this.Dependencias);
        const data = {
            lat: search.lat,
            lng: search.lng,
        };
        const andressPersists = await getAndressUseCase.execute(data);
        return andressPersists;
    }
    // #endregion
    // #region Todos Operacoes
    async persistsDataTodosDependences(search) {
        const persistsTodosUseCase = new PersistsTodosUseCase(this.Dependencias);
        const data = {
            urlFecth: 'https://jsonplaceholder.typicode.com/users',
            urlIndice: search.id
        };
        const todosPersists = await persistsTodosUseCase.execute(data);
        return todosPersists;
    }
    async getDataTodosDependences(search) {
        const getTodosUseCase = new GetTodosUseCase(this.Dependencias);
        const data = {
            userId: search.id
        };
        const todosPersists = await getTodosUseCase.execute(data);
        return todosPersists;
    }
    // #endregion
    // #region Photos Operacoes 
    async persistsDataPostsDependences(search) {
        const persistsPostUseCase = new PersistsPostUseCase(this.Dependencias);
        const data = {
            urlFecth: 'https://jsonplaceholder.typicode.com/users',
            urlIndice: search.id
        };
        const postPersists = await persistsPostUseCase.execute(data);
        return postPersists;
    }
    async getDataPostsDependences(search) {
        const getPostUseCase = new GetPostUseCase(this.Dependencias);
        const data = {
            userId: search.id
        };
        const postsPersists = await getPostUseCase.execute(data);
        return postsPersists;
    }
    // #endregion
    // #region Photos Operacoes 
    async persistsDataPhotosDependences(search) {
        const persistsPhotosUseCase = new PersistsPhotosUseCase(this.Dependencias);
        const data = {
            urlFecth: 'https://jsonplaceholder.typicode.com/albums',
            urlIndice: search.id
        };
        const photoPersists = await persistsPhotosUseCase.execute(data);
        return photoPersists;
    }
    async getDataPhotosDependences(search) {
        const getPhotoUseCase = new GetPhotoUseCase(this.Dependencias);
        const data = {
            albumId: search.id
        };
        const albumPersists = await getPhotoUseCase.execute(data);
        return albumPersists;
    }
    // #endregion
    // #region Album Operacoes 
    async persistsDataCommentsDependences(search) {
        const persistsCommentsUseCase = new PersistsCommentsUseCase(this.Dependencias);
        const data = {
            urlFecth: 'https://jsonplaceholder.typicode.com/posts',
            urlIndice: search.id
        };
        const commentsPersists = await persistsCommentsUseCase.execute(data);
        return commentsPersists;
    }
    async getDataCommentsDependences(search) {
        const getCommentUseCase = new GetCommentUseCase(this.Dependencias);
        const data = {
            postId: search.id
        };
        const albumPersists = await getCommentUseCase.execute(data);
        return albumPersists;
    }
    // #endregion
    // #region Album Operacoes 
    async persistsDataAlbumDependences(search) {
        const persistsAlbumUseCase = new PersistsAlbumUseCase(this.Dependencias);
        const data = {
            urlFecth: 'https://jsonplaceholder.typicode.com/users',
            urlIndice: search.id
        };
        const albumPersists = await persistsAlbumUseCase.execute(data);
        return albumPersists;
    }
    async getDataAlbumDependences(search) {
        const getAlbumUseCase = new GetAlbumUseCase(this.Dependencias);
        const data = {
            userId: search.id
        };
        const albumPersists = await getAlbumUseCase.execute(data);
        return albumPersists;
    }
    // #endregion


}

module.exports = { Controller };