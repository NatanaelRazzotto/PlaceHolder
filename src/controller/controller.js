const { FetchUserUseCase } = require('../useCase/userUseCase/fetchUserUseCase');
const { PostUserUseCase } = require('../useCase/userUseCase/postUserUseCase')
const { RequestService } = require('../../src/servicesApplication/requestService');
const { RepositoryUser } = require('../repository/sequelize/repositoryClass/repositoryUser/repositoryUser');

class Controller {
    constructor() {
        this.requestService = new RequestService();
        this.fetchUserUseCase = new FetchUserUseCase(this.requestService);
        this.postUserUseCase = new PostUserUseCase(this.requestService);
        this.users = [];
    }
    async persistenceData(maxData) {
        // this.users = this.fetchDataUser(5);
        return await this.PersisteDataUser(maxData);
    }
    async PersisteDataUser(maxData) {
        const data = {
            url: 'https://jsonplaceholder.typicode.com/users',
            max: maxData,
        };
        const fetchUsers = await this.fetchUserUseCase.execute(data);
        const postUsers = await this.postUserUseCase.execute(fetchUsers);
        return postUsers;

    }
}

module.exports = { Controller };