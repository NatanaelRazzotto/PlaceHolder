const { ModelPhoto } = require('../sequelize/models/modelPhoto');
const { RepositoryAlbum } = require('../../../src/infrastructure/repository/repositoryAlbum');
const { Op } = require("sequelize");

class RepositoryPhoto {
    constructor() {
        this.repositoryAlbum = new RepositoryAlbum();
    }
    async create(photo) {
        await ModelPhoto.sync();
        const searchAlbum = {
            id: photo.albumId,
        }
        const album = await this.repositoryAlbum.findAlbum(searchAlbum);
        if ((album != null)) {
            const validate = await this.findPhoto(photo);
            if ((validate != null)) {
                //console.log("já exite o registro");
                return validate;
            }
            else {
                //console.log("não exite registro");
                const received = await ModelPhoto.create(photo);
                return received.dataValues;
            }
        }
        else {
            throw new Error('O Album Associado não foi encontrado');//
        }
    }

    async findPhoto(photoObject) {
        const Photo = await ModelPhoto.findOne({
            where: {
                id: photoObject.id
            },
            raw: true
        }).then(function (result) {
            // console.log(" test + " + result);
            return result;
        }).catch(function (errorResult) {
            // console.error("ocorreu um erro com o findAlbumFromUser", errorResult);
            // return result;
        });
        return Photo;
    }
    async findAllPhotoFromAlbum(searchObject) {
        const Photo = await ModelPhoto.findAll({
            where: {
                albumId: searchObject.albumId
            },
            raw: true
        }).then(function (result) {
            // console.log(" test + " + result);
            return result;
        }).catch(function (errorResult) {
            // console.error("ocorreu um erro com o findAlbumFromUser", errorResult);
            // return result;
        });
        return Photo;
    }

    async findAll() {
        const photo = await ModelPhoto.findAll();
        return photo;
    }
}

module.exports = { RepositoryPhoto };