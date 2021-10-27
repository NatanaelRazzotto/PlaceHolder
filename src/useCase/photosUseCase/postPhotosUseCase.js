const { RepositoryPhoto } = require('../../repository/sequelize/repositoryClass/repositoryPhoto');

class PostPhotosUseCase {
    constructor() {
        this.repositoryPhoto = new RepositoryPhoto();
    }
    async execute(dataPhoto) {
        return await this.preparCreateRegisterDB(dataPhoto);
    }
    async preparCreateRegisterDB(dataPhoto) {
        const photoObject = this.preparObject(dataPhoto);
        const photoPersistido = await this.repositoryPhoto.create(photoObject);
        return photoPersistido;
    }

    preparObject(dataPhoto) {
        const Object = {
            id: dataPhoto.id,
            albumId: dataPhoto.albumId,
            title: dataPhoto.title,
            url: dataPhoto.url,
            thumbnailUrl: dataPhoto.thumbnailUrl
        }
        return Object;
    }
}

module.exports = { PostPhotosUseCase };