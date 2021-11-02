const { CreateAlbumUseCase } = require('./createAlbumUseCase');
const { FetchAlbumsUseCase } = require('./fetchAlbumsUseCase');
const { PersistsPhotosUseCase } = require('../../useCase/photosUseCase/persistsPhotosUseCase');

class PersistsAlbumUseCase {
    constructor(requestService) {
        //this.requestService = requestService;
        this.createAlbumUseCase = new CreateAlbumUseCase(requestService);
        this.fetchAlbumsUseCase = new FetchAlbumsUseCase(requestService);
        this.persistsPhotosUseCase = new PersistsPhotosUseCase(requestService);
    }

    async execute(param) {
        return await this.persistence(param);
    }

    async persistence({ urlFecth, urlIndice }) {
        const persistenceAlbum = [];
        const data = {
            urlFecth: urlFecth,
            urlIndice: urlIndice,
            urlFilter: 'albums'
        };
        const fetchAlbum = await this.fetchAlbumsUseCase.execute(data);
        for (const element of fetchAlbum) {
            const populado = await this.persistsAlbum(element);
            persistenceAlbum.push(populado);
        }
        return persistenceAlbum;
    }

    async persistsAlbum(Album) {
        let populado = await this.createAlbumUseCase.execute(Album);
        populado.depentes = await this.persistsDependentes(populado);
        return populado;
    }

    async persistsDependentes(Album) {
        const data = {
            urlFecth: 'https://jsonplaceholder.typicode.com/albums',
            urlIndice: Album.id
        };
        const pesistPhoto = await this.persistsPhotosUseCase.execute(data);
        return pesistPhoto;
    }

}

module.exports = { PersistsAlbumUseCase };

