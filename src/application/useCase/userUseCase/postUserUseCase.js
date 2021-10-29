const { RepositoryUser } = require('../../infrastructure/sequelize/repository/repositoryUser/repositoryUser');
const { PostAndressUseCase } = require('../andressUseCase/postAndressUseCase');
const { PostCompanyUseCase } = require('../companyUseCase/postCompanyUseCase');
const { User } = require('../../../domain/user');
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
    async preparObject({ id, name, email, andress, phone, website, company }) {
        let andress = await this.postAndressUseCase.execute(address);
        let company = await this.postCompanyUseCase.execute(company)
        const objectUser = new User(id, name, email, andress.addressId, phone, website, company.companyId);
        /* const Object = {
             id: dataUsers.id,
             name: dataUsers.name,
             email: dataUsers.email,
             addressId: andress.addressId,
             phone: dataUsers.phone,
             website: dataUsers.website,
             companyId: company.companyId,
         }*/
        return objectUser;
    }
}

module.exports = { PostUserUseCase };

