const { RepositoryUser } = require('../../repository/sequelize/repositoryClass/repositoryUser/repositoryUser');
const { PostAndressUseCase } = require('./postAndressUseCase');
const { PostCompanyUseCase } = require('./postCompanyUseCase');

class PostUserUseCase {
    constructor(requestService) {
        this.requestService = requestService;
        this.postAndressUseCase = new PostAndressUseCase();
        this.postCompanyUseCase = new PostCompanyUseCase();
        this.repositoryUser = new RepositoryUser();
    }

    async execute(dataUsers) {
        return await this.preparPostCreate(dataUsers);
    }

    async preparPostCreate(dataUsers) {
        const request = [];
        for (let index = 0; index < dataUsers.length; index++) {
            const userPersistido = await this.preparObject(dataUsers[index]);
            const populado = await this.repositoryUser.create(userPersistido);
            request.push(populado);
            //return populado;
        }
        return request;
    }
    async preparObject(dataUsers) {
        let andress = await this.postAndressUseCase.execute(dataUsers.address);
        let company = await this.postCompanyUseCase.execute(dataUsers.company)
        const Object = {
            id: dataUsers.id,
            name: dataUsers.name,
            email: dataUsers.email,
            addressId: andress.addressId,
            phone: dataUsers.phone,
            website: dataUsers.website,
            companyId: company.companyId,
        }
        return Object;
    }
}

module.exports = { PostUserUseCase };

