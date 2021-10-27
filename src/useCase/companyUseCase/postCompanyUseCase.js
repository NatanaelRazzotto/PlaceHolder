const { RepositoryCompany } = require('../../repository/sequelize/repositoryClass/repositoryUser/repositoryCompany');

class PostCompanyUseCase {
    constructor() {
        this.repositoryCompany = new RepositoryCompany();
    }

    async execute(dataCompany) {
        return await this.preparCreateRegisterDB(dataCompany);
    }
    async preparCreateRegisterDB(dataCompany) {
        const companyObject = this.preparObject(dataCompany);
        const companyPersistido = await this.repositoryCompany.create(companyObject);
        return companyPersistido;
    }

    preparObject(dataCompany) {
        const Object = {
            name: dataCompany.name,
            catchPhrase: dataCompany.catchPhrase,
            bs: dataCompany.bs,
        }
        return Object;
    }
}

module.exports = { PostCompanyUseCase };