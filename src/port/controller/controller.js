
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
            repositoryPost: new RepositoryPost(),//this.repositoryUser
            repositoryComment: new RepositoryComment(),
            repositoryAlbum: new RepositoryAlbum(),//this.repositoryUser
            repositoryPhoto: new RepositoryPhoto(),//this.repositoryAlbum
            repositoryTodos: new RepositoryTodos(),//this.repositoryUser
        }
    }
    // #region User Operacoes 
    async persistsDataUsersDependences(search) {
        try {
            const persistsUserUseCase = new PersistsUserUseCase(this.Dependencias);

            const data = {
                max: search.maxIndice,
                generate: search.generate
            };
            const userPersists = await persistsUserUseCase.execute(data);
            return userPersists;
        }
        catch (e) {
            throw new Error('Um erro na persistencia (persistsDataUsersDependences)', e.stack);//
        }
    }
    async getDataUserDependences(search) {
        try {
            const getUserUseCase = new GetUserUseCase(this.Dependencias);
            const data = {
                id: search.id
            };
            const userPersists = await getUserUseCase.execute(data);
            return userPersists;
        }
        catch (e) {
            throw new Error('Um erro no GET (getDataUserDependences)', e.stack);//
        }
    }
    async getDataAndressDependences(search) {
        try {
            const getAndressUseCase = new GetAndressUseCase(this.Dependencias);
            const data = {
                lat: search.lat,
                lng: search.lng,
            };
            const andressPersists = await getAndressUseCase.execute(data);
            return andressPersists;
        } catch (e) {
            throw new Error('Um erro no GET (getDataAndressDependences)', e.stack);//
        }
    }
    async getCompanyDependences(search) {
        try {
            const getCompanyUseCase = new GetCompanyUseCase(this.Dependencias);
            const data = {
                name: search.name,
            };
            const companyPersists = await getCompanyUseCase.execute(data);
            return companyPersists;
        } catch (e) {
            throw new Error('Um erro no GET (getCompanyDependences)', e.stack);//
        }
    }
    // #endregion
    // #region Todos Operacoes
    async persistsDataTodosDependences(search) {
        try {
            const persistsTodosUseCase = new PersistsTodosUseCase(this.Dependencias);
            const data = {
                urlFecth: 'https://jsonplaceholder.typicode.com/users',
                urlIndice: search.id
            };
            const todosPersists = await persistsTodosUseCase.execute(data);
            return todosPersists;
        } catch (e) {
            throw new Error('Um erro na persistencia (persistsDataTodosDependences)', e.stack);//
        }
    }
    async getDataTodosDependences(search) {
        try {
            const getTodosUseCase = new GetTodosUseCase(this.Dependencias);
            const data = {
                userId: search.id
            };
            const todosPersists = await getTodosUseCase.execute(data);
            return todosPersists;
        } catch (e) {
            throw new Error('Um erro no GET (getDataTodosDependences)', e.stack);//
        }
    }
    // #endregion
    // #region Photos Operacoes 
    async persistsDataPostsDependences(search) {
        try {
            const persistsPostUseCase = new PersistsPostUseCase(this.Dependencias);
            const data = {
                urlFecth: 'https://jsonplaceholder.typicode.com/users',
                urlIndice: search.id
            };
            const postPersists = await persistsPostUseCase.execute(data);
            return postPersists;

        } catch (e) {
            throw new Error('Um erro na persistencia (persistsDataPostsDependences)', e.stack);//
        }
    }
    async getDataPostsDependences(search) {
        try {
            const getPostUseCase = new GetPostUseCase(this.Dependencias);
            const data = {
                userId: search.id
            };
            const postsPersists = await getPostUseCase.execute(data);
            return postsPersists;
        } catch (e) {
            throw new Error('Um erro no GET (getDataPostsDependences)', e.stack);//
        }
    }
    // #endregion
    // #region Photos Operacoes 
    async persistsDataPhotosDependences(search) {
        try {
            const persistsPhotosUseCase = new PersistsPhotosUseCase(this.Dependencias);
            const data = {
                urlFecth: 'https://jsonplaceholder.typicode.com/albums',
                urlIndice: search.id
            };
            const photoPersists = await persistsPhotosUseCase.execute(data);
            return photoPersists;
        } catch (e) {
            throw new Error('Um erro na persistencia (persistsDataPhotosDependences)', e.stack);//
        }

    }
    async getDataPhotosDependences(search) {
        try {
            const getPhotoUseCase = new GetPhotoUseCase(this.Dependencias);
            const data = {
                albumId: search.id
            };
            const photoPersists = await getPhotoUseCase.execute(data);
            return photoPersists;
        } catch (e) {
            throw new Error('Um erro no GET (getDataPhotosDependences)', e.stack);//
        }
    }
    // #endregion
    // #region Album Operacoes 
    async persistsDataCommentsDependences(search) {
        try {
            const persistsCommentsUseCase = new PersistsCommentsUseCase(this.Dependencias);
            const data = {
                urlFecth: 'https://jsonplaceholder.typicode.com/posts',
                urlIndice: search.id
            };
            const commentsPersists = await persistsCommentsUseCase.execute(data);
            return commentsPersists;
        } catch (e) {
            throw new Error('Um erro na persistencia (persistsDataCommentsDependences)', e.stack);//
        }
    }
    async getDataCommentsDependences(search) {
        try {
            const getCommentUseCase = new GetCommentUseCase(this.Dependencias);
            const data = {
                postId: search.id
            };
            const commentPersists = await getCommentUseCase.execute(data);
            return commentPersists;
        } catch (e) {
            throw new Error('Um erro no GET (getDataCommentsDependences)', e.stack);//
        }
    }
    // #endregion
    // #region Album Operacoes 
    async persistsDataAlbumDependences(search) {
        try {
            const persistsAlbumUseCase = new PersistsAlbumUseCase(this.Dependencias);
            const data = {
                urlFecth: 'https://jsonplaceholder.typicode.com/users',
                urlIndice: search.id
            };
            const albumPersists = await persistsAlbumUseCase.execute(data);
            return albumPersists;
        } catch (e) {
            throw new Error('Um erro na persistencia (persistsDataAlbumDependences)', e.stack);//
        }
    }
    async getDataAlbumDependences(search) {
        try {
            const getAlbumUseCase = new GetAlbumUseCase(this.Dependencias);
            const data = {
                userId: search.id
            };
            const albumPersists = await getAlbumUseCase.execute(data);
            return albumPersists;
        } catch (e) {
            throw new Error('Um erro no GET (getDataAlbumDependences)', e.stack);//
        }
    }
    // #endregion


}

module.exports = { Controller };