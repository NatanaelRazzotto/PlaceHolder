const { ModelPost } = require('../sequelize/models/modelPost');
const { RepositoryUser } = require('../../../src/infrastructure/repository/repositoryUser');
const { Op } = require("sequelize");

class RepositoryPost {
    constructor() {
       // await ModelPost.sync();
        this.repositoryUser = new RepositoryUser();
    }
    async create(post) {
        await ModelPost.sync();
        const searchUser = {
            id: post.userId,
        }
        const user = await this.repositoryUser.findUser(searchUser);
        if ((user != null)) {
            const validate = await this.findByPkPost(post);
            if ((validate != null)) {                
                //console.log("já exite o registro");
                const update =  await this.updateByIdPost(post,validate);
                return update;
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

    async findByPkPost(postObject) {
        const Post = await ModelPost.findByPk(postObject.id);
        return Post;
    }

    async findPost(postObject) {
        const Post = await ModelPost.findOne({
            where: {
                id: postObject.id
            },
            raw: true
        }).then(function (result) {
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
            return result;
        }).catch(function (err) {
            throw new Error('Um erro na consulta findAllPostFromUser', err.stack);//
        })
        return Post;
    }

    async deleteByIdPost(postObject) {
        const post = await ModelPost.findByPk(postObject.id);
        if (post != null) {
            const received = post.destroy();
            return received;
        }
        return null;
    }

    async searchForUpdateByIdPost(postObject) {
        const postToChange = await this.findByPkPost(postObject);
        const update =  await this.updateByIdPost(postObject,postToChange);
        return update;
    }

    async updateByIdPost(postObject,postToChange) {       

        Object.entries(postObject).forEach(([key, value]) => {
            postToChange[key] = value;
        });
    
        const result = await postToChange.save();
        return result.dataValues;
    }   

}

module.exports = { RepositoryPost };