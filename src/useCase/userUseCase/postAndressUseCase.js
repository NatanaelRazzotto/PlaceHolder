const { RepositoryAddress } = require('../../repository/sequelize/repositoryClass/repositoryUser/repositoryAndress');

class PostAndressUseCase {
    constructor() {
        this.repositoryAddress = new RepositoryAddress();
    }

    async execute(dataAdress) {
        return this.preparCreateRegisterDB(dataAdress);
    }
    async preparCreateRegisterDB(dataAdress) {
        const andressObject = this.preparObject(dataAdress);
        const andressPersistido = await this.repositoryAddress.create(andressObject);
        return andressPersistido;
    }

    preparObject(dataAdress) {
        const Object = {
            street: dataAdress.street,
            suite: dataAdress.suite,
            city: dataAdress.city,
            zipcode: dataAdress.zipcode,
            lat: dataAdress.geo.lat,
            lng: dataAdress.geo.lng,
        }
        return Object;
    }
}

module.exports = { PostAndressUseCase };