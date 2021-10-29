const { RepositoryPhoto } = require('../../../infrastructure/repository/repositoryPhoto');
const { Photo } = require('../../../domain/photo');
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

    preparObject({ id, albumId, title, url, thumbnailUrl }) {
        const objectPhoto = new Photo(id, albumId, title, url, thumbnailUrl)
        /* const Object = {
             id: dataPhoto.id,
             albumId: dataPhoto.albumId,
             title: dataPhoto.title,
             url: dataPhoto.url,
             thumbnailUrl: dataPhoto.thumbnailUrl
         }*/
        return objectPhoto;
    }
}

module.exports = { PostPhotosUseCase };