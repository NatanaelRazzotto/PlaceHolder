const { RepositoryAlbum } = require('../../../infrastructure/repository/repositoryAlbum');
const { Album } = require('../../../domain/album')
class GetAlbumUseCase {
    constructor() {
        this.repositoryAlbum = new RepositoryAlbum();
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