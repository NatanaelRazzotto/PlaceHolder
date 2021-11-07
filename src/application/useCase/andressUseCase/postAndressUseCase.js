const { RepositoryAddress } = require('../../../infrastructure/repository/repositoryAndress');
const { Andress } = require('../../../domain/andress')
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

    preparObject({ street, suite, city, zipcode, geo }) {// geo: { lat }, geo: { lng }
        //console.log("ffff " + geo.lat)
        //  console.log("dsdsaddsffdgfdgfdg " + geo.lng)
        const objectAndress = new Andress(0, street, suite, city, zipcode, geo.lat, geo.lng);
        /*const Object = {
            street: dataAdress.street,
            suite: dataAdress.suite,
            city: dataAdress.city,
            zipcode: dataAdress.zipcode,
            lat: dataAdress.geo.lat,
            lng: dataAdress.geo.lng,
        }*/
        return objectAndress;
    }
}

module.exports = { PostAndressUseCase };