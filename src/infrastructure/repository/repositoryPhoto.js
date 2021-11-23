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
            const validate = await this.findByPkPhoto(photo);
            if ((validate != null)) {
                //console.log("já exite o registro");
                const update =  await this.updateByIdPhoto(photo,validate);
                return update;
            }
            else {
                //console.log("não exite registro");
                const received = await ModelPhoto.create(photo);
                return received.dataValues;
            }
        }
        else {
            // throw new Error('O Album Associado não foi encontrado');//
            return null;
        }
    }

    async findByPkPhoto(photoObject) {
        const Photo = await ModelPhoto.findByPk(photoObject.id);
        return Photo;
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
        }).catch(function (err) {
            throw new Error('Um erro na consulta findPhoto', err.stack);//
        })
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
        }).catch(function (err) {
            throw new Error('Um erro na consulta findAllPhotoFromAlbum', err.stack);//
        })
        return Photo;
    }

    async deleteByIdPhoto(photoObject) {
        const photo = await ModelPhoto.findByPk(photoObject.id);
        //console.log(user)
        if (photo != null) {
            const received = photo.destroy();
            return received;
        }
        return null;
    }

    async searchForUpdateByIdPhoto(photoObject) {
        const photoToChange = await this.findByPkPhoto(photoObject);
        const update =  await this.updateByIdPhoto(photoObject,photoToChange);
        return update;
    }

    async updateByIdPhoto(photoObject,photoToChange) {       

        Object.entries(photoObject).forEach(([key, value]) => {
            photoToChange[key] = value;
        });
    
        const result = await photoToChange.save();
        return result.dataValues;
    }   
}

module.exports = { RepositoryPhoto };