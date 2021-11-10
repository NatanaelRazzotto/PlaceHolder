const { ModelComment } = require('../sequelize/models/modelComment');
const { Op } = require("sequelize");

class RepositoryComment {
    async create(comment) {
        await ModelComment.sync();
        const validate = await this.findComment(comment);
        if ((validate != null)) {
            //console.log("já exite o registro");
            return validate;
        }
        else {
            //console.log("não exite registro");
            const received = await ModelComment.create(comment);
            return received.dataValues;
        }
    }
    async findComment(commentObject) {
        const Comment = await ModelComment.findOne({
            where: {
                id: commentObject.id
            },
            raw: true
        }).then(function (result) {
            // console.log(" test + " + result);
            return result;
        }).catch(function (errorResult) {
            // console.error("ocorreu um erro com o findAlbumFromUser", errorResult);
            // return result;
        });
        return Comment;
    }
    async findAlCommentFromPost(searchObject) {
        const Comment = await ModelComment.findAll({
            where: {
                postId: searchObject.postId
            },
            raw: true
        }).then(function (result) {
            // console.log(" test + " + result);
            return result;
        }).catch(function (errorResult) {
            // console.error("ocorreu um erro com o findAlbumFromUser", errorResult);
            // return result;
        });
        return Comment;
    }

    async findAll() {
        const comment = await ModelComment.findAll();
        return comment;
    }
}

module.exports = { RepositoryComment };