//const { RepositoryAddress } = require('../../../infrastructure/repository/repositoryAndress');

class GetAndressUseCase {
    constructor({ repositoryAddress }) {
        this.repositoryAddress = repositoryAddress;
    }
    async execute(dataAdress) {
        return await this.getRegisterInDB(dataAdress);
    }
    async getRegisterInDB(dataAdress) {
        const andressPersistido = await this.repositoryAddress.findAndress(dataAdress);
        return andressPersistido;
    }
}

module.exports = { GetAndressUseCase };