const { ModelPhoto } = require('../models/modelPhoto');
const { Op } = require("sequelize");

class RepositoryPhoto {
    async create(photo) {
        await ModelPhoto.sync();
        const validate = await this.findAllWhere(photo);
        if ((validate[0] != null)) {
            console.log("já exite o registro");
            return validate[0];
        }
        else {
            console.log("não exite registro");
            const received = await ModelPhoto.create(photo);
            return received.dataValues;
        }
    }

    async findAllWhere(photoObject) {
        const Photo = await ModelPhoto.findAll({
            where: {
                id: photoObject.id
            },
            raw: true,
            limit: 1
        }).then(function (result) {
            console.log(" test + " + result);
            return result;
        });
        return Photo;
    }

    async findAll() {
        const photo = await ModelPhoto.findAll();
        return photo;
    }
}

module.exports = { RepositoryPhoto };