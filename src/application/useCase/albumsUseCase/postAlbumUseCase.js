const { RepositoryAlbum } = require('../../../infrastructure/repository/repositoryAlbum');
const { Album } = require('../../../domain/album')
class PostAlbumUseCase {
    constructor() {
        this.repositoryAlbum = new RepositoryAlbum();
    }

    async execute(dataAlbum) {
        return await this.preparCreateRegisterDB(dataAlbum);
    }
    async preparCreateRegisterDB(dataPost) {
        const albumObject = this.preparObject(dataPost);
        const albumPersistido = await this.repositoryAlbum.create(albumObject);
        return albumPersistido;
    }

    preparObject({ id, userId, title }) {
        const objectAlbum = new Album(id, userId, title);
        /*const Object = {
            id: dataAlbum.id,
            userId: dataAlbum.userId,
            title: dataAlbum.title
        }*/
        return objectAlbum;
    }
}

module.exports = { PostAlbumUseCase };