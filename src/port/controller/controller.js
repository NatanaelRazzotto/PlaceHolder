const { FetchUserUseCase } = require('../../../src/application/useCase/userUseCase/fetchUserUseCase');
const { FetchPostUseCase } = require('../../../src/application/useCase/postsUseCase/fetchPostsUseCase');
const { PostUserUseCase } = require('../../application/useCase/userUseCase/createUserUseCase')
const { RequestService } = require('../../servicesApplication/requestService');
const { RepositoryUser } = require('../../infrastructure/repository/repositoryUser');

const { PersistsUserUseCase } = require('../../application/useCase/userUseCase/persistsUserUseCase');

class Controller {
    constructor() {
        this.persistsUserUseCase = new PersistsUserUseCase();
    }

    async persistsDataUsersDependences(maxSearch) {
        const data = {
            max: maxSearch
        };
        const userPersists = await this.persistsUserUseCase.execute(data);
        return userPersists;
    }




    async persistenceData(maxData) {
        // this.users = this.fetchDataUser(5);
        return await this.FetchCreateDataUsers(maxData);
    }
    // async FetchCreateDataUsers(maxData) {
    //     const data = {
    //         url: 'https://jsonplaceholder.typicode.com/users',
    //         max: maxData,
    //     };
    //     const fetchUsers = await this.fetchUserUseCase.execute(data);
    //     const postUsers = await this.postUserUseCase.execute(fetchUsers);
    //     return postUsers;

    // }
    async FetchCreateDataPosts(idUser) {
        const data = {
            urlFecth: 'https://jsonplaceholder.typicode.com/users',
            urlIndice: idUser,
            urlFilter: 'posts'
        };
        const fetchPosts = await this.fetchPostUseCase.execute(data);

    }
}

module.exports = { Controller };