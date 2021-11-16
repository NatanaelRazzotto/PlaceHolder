const { RepositoryPhoto } = require('../../../infrastructure/repository/repositoryPhoto');

class GetPhotoUseCase {
    constructor() {
        this.repositoryPhoto = new RepositoryPhoto();
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