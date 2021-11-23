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
            const validate = await this.findByPkComment(comment);
           // const validate = await this.findComment(comment);
            if ((validate != null)) {
               // console.log("já exite o registro");
                const update =  await this.updateByIdComment(comment,validate);
                return update;
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

    async findByPkComment(commentObject) {
        const comment = await ModelComment.findByPk(commentObject.id);
        return comment;
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

    async deleteByIdComment(commentObject) {
        const comment = await this.findByPkComment(commentObject);
       // const comment = await ModelComment.findByPk(commentObject.id);
        //console.log(user)
        if (comment != null) {
            const received = comment.destroy();
            return received;
        }
        return null;
    }

    async searchForUpdateByIdComment(commentObject) {
        const commentToChange = await this.findByPkComment(commentObject);
        const update =  await this.updateByIdComment(commentObject,commentToChange);
        return update;
    }

    async updateByIdComment(commentObject,commentToChange) {       

        Object.entries(commentObject).forEach(([key, value]) => {
            commentToChange[key] = value;
        });
    
        const result = await commentToChange.save();
        return result.dataValues;
      }
    
}

module.exports = { RepositoryComment };