const { RepositoryAlbum } = require('../../repository/sequelize/repositoryClass/repositoryAlbum');

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

    preparObject(dataAlbum) {
        const Object = {
            id: dataAlbum.id,
            userId: dataAlbum.userId,
            title: dataAlbum.title
        }
        return Object;
    }
}

module.exports = { PostAlbumUseCase };