const { ModelPost } = require('../sequelize/models/modelPost');
const { RepositoryUser } = require('../../../src/infrastructure/repository/repositoryUser');
const { Op } = require("sequelize");

class RepositoryPost {
    constructor() {
        this.repositoryUser = new RepositoryUser();
    }
    async create(post) {
        await ModelPost.sync();
        const searchUser = {
            id: post.userId,
        }
        const user = await this.repositoryUser.findUser(searchUser);
        if ((user != null)) {

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
        else {
            return null
            //throw new Error('O User Associado não foi encontrado');//
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
        }).catch(function (err) {
            throw new Error('Um erro na consulta findPost', err.stack);//
        })
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
        }).catch(function (err) {
            throw new Error('Um erro na consulta findAllPostFromUser', err.stack);//
        })
        return Post;
    }

}

module.exports = { RepositoryPost };