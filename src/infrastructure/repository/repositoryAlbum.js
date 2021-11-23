const { ModelAlbum } = require('../sequelize/models/modelAlbum');
const { RepositoryUser } = require('../../../src/infrastructure/repository/repositoryUser');
const { Op } = require("sequelize");

class RepositoryAlbum {
    constructor() {
        this.repositoryUser = new RepositoryUser();
    }
    async create(album) {
        await ModelAlbum.sync();
        const searchUser = {
            id: album.userId,
        }
        const user = await this.repositoryUser.findUser(searchUser);
        if ((user != null)) {
            const validate = await this.findAlbum(album);
            if ((validate != null)) {//validate[0]
                //console.log("já exite o registro");
                return validate;
            }
            else {
                //console.log("não exite registro");
                const received = await ModelAlbum.create(album);
                return received.dataValues;
            }
        } else {
            return null;
            //throw new Error('O User Associado não foi encontrado');//
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
        }).catch(function (err) {
            throw new Error('Um erro na consulta findAlbum', err.stack);//
        })
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
            throw new Error('Um erro na consulta findAlbumFromUser', errorResult.stack);//
        });
        return Album;
    }

    async deleteByIdAlbum(albumObject) {
        const album = await ModelAlbum.findByPk(albumObject.id);
        //console.log(user)
        if (album != null) {
            const received = album.destroy();
            return received;
        }
        return null;
    }
}

module.exports = { RepositoryAlbum };