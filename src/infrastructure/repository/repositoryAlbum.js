const { ModelAlbum } = require('../sequelize/models/modelAlbum');
const { Op } = require("sequelize");

class RepositoryAlbum {
    async create(album) {
        await ModelAlbum.sync();
        const validate = await this.findAllWhere(album);
        if ((validate[0] != null)) {
            console.log("já exite o registro");
            return validate[0];
        }
        else {
            console.log("não exite registro");
            const received = await ModelAlbum.create(album);
            return received.dataValues;
        }
    }

    async findAllWhere(albumObject) {
        const Album = await ModelAlbum.findAll({
            where: {
                id: albumObject.id
            },
            raw: true,
            limit: 1
        }).then(function (result) {
            console.log(" test + " + result);
            return result;
        });
        return Album;
    }

    async findAll() {
        const album = await ModelAlbum.findAll();
        return album;
    }
}

module.exports = { RepositoryAlbum };