const { RepositoryCompany } = require('../../../infrastructure/repository/repositoryCompany');

class GetCompanyUseCase {
    constructor() {
        this.repositoryCompany = new RepositoryCompany();
    }
    async execute(dataCompany) {
        return await this.getRegisterInDB(dataCompany);
    }
    async getRegisterInDB(dataCompany) {
        const companyPersistido = await this.repositoryCompany.findCompany(dataCompany);
        return companyPersistido;
    }
}

module.exports = { GetCompanyUseCase };