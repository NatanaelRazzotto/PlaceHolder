const { ModelAlbum } = require('../sequelize/models/modelAlbum');
const { Op } = require("sequelize");

class RepositoryAlbum {
    async create(album) {
        await ModelAlbum.sync();
        const validate = await this.findAlbum(album);
        console.log('aaaa' + validate);
        if ((validate != null)) {//validate[0]
            //console.log("já exite o registro");
            return validate;
        }
        else {
            //console.log("não exite registro");
            const received = await ModelAlbum.create(album);
            return received.dataValues;
        }
    }
    /*async findAllWhere(albumObject) {
        const Album = await ModelAlbum.findAll({
            where: {
                id: albumObject.id
            },
            raw: true,
            limit: 1
        }).then(function (result) {
            //  console.log(" test + " + result);
            return result;
        });
        return Album;
    }*/

    async findAlbum(albumObject) {
        const Album = await ModelAlbum.findOne({
            where: {
                id: albumObject.id
            },
            raw: true
        }).then(function (result) {
            // console.log(" test + " + result);
            return result;
        }).catch(function (errorResult) {
            // console.error("ocorreu um erro com o findAlbumFromUser", errorResult);
            // return result;
        });
        return Album;
    }
    async findAlbumFromUser(searchObject) {
        const Album = await ModelAlbum.findAll({
            where: {
                userId: searchObject.userId
            },
            raw: true
        }).then(function (result) {
            // console.log(" test + " + result);
            return result;
        }).catch(function (errorResult) {
            // console.error("ocorreu um erro com o findAlbumFromUser", errorResult);
            // return result;
        });
        return Album;
    }

    async findAll() {
        const album = await ModelAlbum.findAll();
        return album;
    }
}

module.exports = { RepositoryAlbum };