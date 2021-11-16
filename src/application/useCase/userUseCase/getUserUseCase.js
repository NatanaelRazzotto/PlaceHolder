const { RepositoryUser } = require('../../../infrastructure/repository/repositoryUser');

class GetUserUseCase {
    constructor() {
        this.repositoryUser = new RepositoryUser();
    }
    async execute(dataUser) {
        return await this.getRegisterInDB(dataUser);
    }
    async getRegisterInDB(dataUser) {
        const userPersistido = await this.repositoryUser.findUser(dataUser);
        return userPersistido;
    }
}

module.exports = { GetUserUseCase };