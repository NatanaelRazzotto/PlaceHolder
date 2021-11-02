const { CreatePhotosUseCase } = require('./createPhotosUseCase');
const { FetchPhotosUseCase } = require('./fetchPhotosUseCase');

class PersistsPhotosUseCase {
    constructor(requestService) {
        //this.requestService = requestService;
        this.createPhotosUseCase = new CreatePhotosUseCase(requestService);
        this.fetchPhotosUseCase = new FetchPhotosUseCase(requestService);
    }

    async execute(param) {
        return await this.persistence(param);
    }

    async persistence({ urlFecth, urlIndice }) {
        const persistencePhotos = [];
        const data = {
            urlFecth: urlFecth,
            urlIndice: urlIndice,
            urlFilter: 'photos'
        };
        const fetchPhotos = await this.fetchPhotosUseCase.execute(data);
        for (const element of fetchPhotos) {
            const populado = await this.persistsPhotos(element);
            persistencePhotos.push(populado);
        }

        return persistencePhotos;

    }

    async persistsPhotos(photo) {
        let populado = await this.createPhotosUseCase.execute(photo);
        return populado;
    }

}

module.exports = { PersistsPhotosUseCase };

