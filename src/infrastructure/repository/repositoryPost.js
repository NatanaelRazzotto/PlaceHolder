const { ModelPost } = require('../sequelize/models/modelPost');
const { Op } = require("sequelize");

class RepositoryPost {
    async create(post) {
        await ModelPost.sync();
        const validate = await this.findPost(post);
        if ((validate != null)) {
            //console.log("já exite o registro");
            return validate;
        }
        else {
            //console.log("não exite registro");
            const received = await ModelPost.create(post);
            return received.dataValues;
        }
    }

    async findPost(postObject) {
        const Post = await ModelPost.findOne({
            where: {
                id: postObject.id
            },
            raw: true
        }).then(function (result) {
            // console.log(" test + " + result);
            return result;
        }).catch(function (errorResult) {
            // console.error("ocorreu um erro com o findAlbumFromUser", errorResult);
            // return result;
        });
        return Post;
    }
    async findAllPostFromUser(searchObject) {
        const Post = await ModelPost.findAll({
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
        return Post;
    }

    async findAll() {
        const post = await ModelPost.findAll();
        return post;
    }
}

module.exports = { RepositoryPost };