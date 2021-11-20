//const { RepositoryPhoto } = require('../../../infrastructure/repository/repositoryPhoto');

class GetPhotoUseCase {
    constructor({ repositoryPhoto }) {
        this.repositoryPhoto = repositoryPhoto;
    }
    async execute(dataPhoto) {
        return await this.getRegisterInDB(dataPhoto);
    }
    async getRegisterInDB(dataPhoto) {
        const photoPersistido = await this.repositoryPhoto.findAllPhotoFromAlbum(dataPhoto);
        return photoPersistido;
    }
}

module.exports = { GetPhotoUseCase };