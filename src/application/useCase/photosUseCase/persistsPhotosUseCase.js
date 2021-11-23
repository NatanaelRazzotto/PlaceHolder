const { CreatePhotosUseCase } = require('./createPhotosUseCase');
const { FetchPhotosUseCase } = require('./fetchPhotosUseCase');

class PersistsPhotosUseCase {
    constructor(Dependencias) {
        this.createPhotosUseCase = new CreatePhotosUseCase(Dependencias);
        this.fetchPhotosUseCase = new FetchPhotosUseCase(Dependencias);
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
            const populado = this.persistsPhotos(element);
            persistencePhotos.push(populado);
        }
        const Photos = await Promise.all(persistencePhotos);
        return Photos;
    }

    async persistsPhotos(photo) {
        let populado = await this.createPhotosUseCase.execute(photo);
        const photoDTO = {
            photoID: populado.id,
            albumId: populado.albumId,
            title: populado.title,
            updatedAt: populado.updatedAt,
            createdAt: populado.createdAt
        };
        return photoDTO;
    }

}

module.exports = { PersistsPhotosUseCase };

