const { ModelComment } = require('../models/modelComment');
const { Op } = require("sequelize");

class RepositoryComment {
    async create(comment) {
        await ModelComment.sync();
        const validate = await this.findAllWhere(comment);
        if ((validate[0] != null)) {
            console.log("já exite o registro");
            return validate[0];
        }
        else {
            console.log("não exite registro");
            const received = await ModelComment.create(comment);
            return received.dataValues;
        }
    }

    async findAllWhere(commentObject) {
        const Comment = await ModelComment.findAll({
            where: {
                id: commentObject.id
            },
            raw: true,
            limit: 1
        }).then(function (result) {
            console.log(" test + " + result);
            return result;
        });
        return Comment;
    }

    async findAll() {
        const comment = await ModelComment.findAll();
        return comment;
    }
}

module.exports = { RepositoryComment };