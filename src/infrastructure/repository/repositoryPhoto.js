const { ModelPhoto } = require('../sequelize/models/modelPhoto');
const { Op } = require("sequelize");

class RepositoryPhoto {
    async create(photo) {
        await ModelPhoto.sync();
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