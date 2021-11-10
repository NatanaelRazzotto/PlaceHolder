const { ModelTodos } = require('../sequelize/models/modelTodos');
const { Op } = require("sequelize");

class RepositoryTodos {
    async create(todos) {
        await ModelTodos.sync();
        const validate = await this.findTodos(todos);
        if ((validate != null)) {
            //console.log("já exite o registro");
            return validate;
        }
        else {
            //console.log("não exite registro");
            const received = await ModelTodos.create(todos);
            return received.dataValues;
        }
    }

    async findAllWhere(todosObject) {
        const Todos = await ModelTodos.findAll({
            where: {
                id: todosObject.id
            },
            raw: true,
            limit: 1
        }).then(function (result) {
            //  console.log(" test + " + result);
            return result;
        });
        return Todos;
    }

    async findTodos(todosObject) {
        const Todos = await ModelTodos.findOne({
            where: {
                id: todosObject.id
            },
            raw: true
        }).then(function (result) {
            // console.log(" test + " + result);
            return result;
        }).catch(function (errorResult) {
            // console.error("ocorreu um erro com o findAlbumFromUser", errorResult);
            // return result;
        });
        return Todos;
    }
    async findAllTodosFromUser(searchObject) {
        const Todos = await ModelTodos.findAll({
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
        return Todos;
    }


    async findAll() {
        const todos = await ModelTodos.findAll();
        return todos;
    }
}

module.exports = { RepositoryTodos };