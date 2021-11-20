//const { RepositoryAddress } = require('../../../infrastructure/repository/repositoryAndress');

class GetAndressUseCase {
    constructor({ repositoryAndress }) {
        this.repositoryAndress = repositoryAndress;
    }
    async execute(dataAdress) {
        return await this.getRegisterInDB(dataAdress);
    }
    async getRegisterInDB(dataAdress) {
        const andressPersistido = await this.repositoryAndress.findAndress(dataAdress);
        return andressPersistido;
    }
}

module.exports = { GetAndressUseCase };