//const { RepositoryCompany } = require('../../../infrastructure/repository/repositoryCompany');

class GetCompanyUseCase {
    constructor({ repositoryCompany }) {
        this.repositoryCompany = repositoryCompany;
    }
    async execute(dataCompany) {
        return await this.getRegisterInDB(dataCompany);
    }
    async getRegisterInDB(dataCompany) {
        const companyPersistido = await this.repositoryCompany.findCompanyID(dataCompany);
        return companyPersistido;
    }
}

module.exports = { GetCompanyUseCase };