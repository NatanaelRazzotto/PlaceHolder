//const { RepositoryUser } = require('../../../infrastructure/repository/repositoryUser');
const { User } = require('../../../domain/user');
const { PostAndressUseCase } = require('../andressUseCase/postAndressUseCase');
const { PostCompanyUseCase } = require('../companyUseCase/postCompanyUseCase');

class CreateUserUseCase {
    constructor(Dependencias) {
        this.requestService = Dependencias.requestService;
        this.postAndressUseCase = new PostAndressUseCase(Dependencias);
        this.postCompanyUseCase = new PostCompanyUseCase(Dependencias);
        this.repositoryUser = Dependencias.repositoryUser;
    }

    async execute(dataUsers) {
        return await this.createUser(dataUsers);
    }

    async createUser(dataUsers) {
        const userPersistido = await this.preparObject(dataUsers);
        const populado = await this.repositoryUser.create(userPersistido);
        return populado;
    }
    async preparObject({ id, name, address, email, phone, website, company }) {
        let andressPopulate = await this.postAndressUseCase.execute(address);
        let companyPopulate = await this.postCompanyUseCase.execute(company)
        const objectUser = new User(id, name, email, andressPopulate.addressId, phone, website, companyPopulate.companyId);
        /* const objectUser = new User(
             dataUsers.id,
             dataUsers.name,
             dataUsers.email,
             andressPopulate,
             dataUsers.phone,
             dataUsers.website,
             companyPopulate,
         )*/
        return objectUser;
    }
}

module.exports = { CreateUserUseCase };

