const { RepositoryUser } = require('../../../infrastructure/repository/repositoryUser');
const { User } = require('../../../domain/user');
const { PostAndressUseCase } = require('../andressUseCase/postAndressUseCase');
const { PostCompanyUseCase } = require('../companyUseCase/postCompanyUseCase');

class CreateUserUseCase {
    constructor(requestService) {
        this.requestService = requestService;
        this.postAndressUseCase = new PostAndressUseCase();
        this.postCompanyUseCase = new PostCompanyUseCase();
        this.repositoryUser = new RepositoryUser();
    }

    async execute(dataUsers) {
        return await this.createUser(dataUsers);
    }

    // async preparPostCreate(dataUsers) {
    //     const request = [];
    //     for (let index = 0; index < dataUsers.length; index++) {
    //         let populado = this.createUser(dataUsers[index])
    //         request.push(populado);
    //     }
    //     return request;
    // }
    async createUser(dataUsers) {
        const userPersistido = await this.preparObject(dataUsers);
        const populado = await this.repositoryUser.create(userPersistido);
        return populado;
    }
    async preparObject({ id, name, address, email, phone, website, company }) {//{ id, name, address: address, email, phone, website, company }
        // console.log("asasas " + dataUsers.address.street)
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

