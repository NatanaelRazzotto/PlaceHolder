const { ModelComment } = require('../sequelize/models/modelComment');
const { RepositoryPost } = require('../../../src/infrastructure/repository/repositoryPost');
const { Op } = require("sequelize");

class RepositoryComment {
    constructor() {
        this.repositoryPost = new RepositoryPost();
    }
    async create(comment) {
        await ModelComment.sync();
        const searchPost = {
            id: comment.postId,
        }
        const post = await this.repositoryPost.findPost(searchPost);
        if ((post != null)) {
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
        else {
            return null;
            //throw new Error('O Post Associado não foi encontrado');//
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
        }).catch(function (err) {
            throw new Error('Um erro na consulta findComment', err.stack);//
        })
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
        }).catch(function (err) {
            throw new Error('Um erro na consulta findAlCommentFromPost', err.stack);//
        })
        return Comment;
    }
}

module.exports = { RepositoryComment };