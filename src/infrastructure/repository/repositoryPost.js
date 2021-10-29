const { ModelPost } = require('../sequelize/models/modelPost');
const { Op } = require("sequelize");

class RepositoryPost {
    async create(post) {
        await ModelPost.sync();
        const validate = await this.findAllWhere(post);
        if ((validate[0] != null)) {
            console.log("já exite o registro");
            return validate[0];
        }
        else {
            console.log("não exite registro");
            const received = await ModelPost.create(post);
            return received.dataValues;
        }
    }

    async findAllWhere(postObject) {
        const Post = await ModelPost.findAll({
            where: {
                id: postObject.id
            },
            raw: true,
            limit: 1
        }).then(function (result) {
            console.log(" test + " + result);
            return result;
        });
        return Post;
    }

    async findAll() {
        const post = await ModelPost.findAll();
        return post;
    }
}

module.exports = { RepositoryPost };