//const { RepositoryAlbum } = require('../../../infrastructure/repository/repositoryAlbum');
const { Album } = require('../../../domain/album')
class GetAlbumUseCase {
    constructor({ repositoryAlbum }) {
        this.repositoryAlbum = repositoryAlbum;
    }
    async execute(dataAlbum) {
        return await this.getRegisterInDB(dataAlbum);
    }
    async getRegisterInDB(dataAlbum) {
        const albumPersistido = await this.repositoryAlbum.findAlbumFromUser(dataAlbum);
        return albumPersistido;
    }
}

module.exports = { GetAlbumUseCase };