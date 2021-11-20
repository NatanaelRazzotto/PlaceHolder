//const { RepositoryCompany } = require('../../../infrastructure/repository/repositoryCompany');
const { Company } = require('../../../domain/company');

class PostCompanyUseCase {
    constructor({ repositoryCompany }) {
        this.repositoryCompany = repositoryCompany;
    }

    async execute(dataCompany) {
        return await this.preparCreateRegisterDB(dataCompany);
    }
    async preparCreateRegisterDB(dataCompany) {
        const companyObject = this.preparObject(dataCompany);
        const companyPersistido = await this.repositoryCompany.create(companyObject);
        return companyPersistido;
    }

    preparObject({ name, catchPhrase, bs }) {
        const objectCompany = new Company(0, name, catchPhrase, bs);
        /*const Object = {
            name: dataCompany.name,
            catchPhrase: dataCompany.catchPhrase,
            bs: dataCompany.bs,
        }*/
        return objectCompany;
    }
}

module.exports = { PostCompanyUseCase };