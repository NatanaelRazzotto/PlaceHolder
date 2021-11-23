const { ModelTodos } = require('../sequelize/models/modelTodos');
const { RepositoryUser } = require('../../../src/infrastructure/repository/repositoryUser');
const { Op } = require("sequelize");

class RepositoryTodos {
    constructor() {
        this.repositoryUser = new RepositoryUser();
    }
    async create(todos) {
        await ModelTodos.sync();
        const searchUser = {
            id: todos.userId,
        }
        const user = await this.repositoryUser.findUser(searchUser);
        if ((user != null)) {
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
        else {
            return null;
            //throw new Error('O User Associado não foi encontrado');//
        }
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
        }).catch(function (err) {
            throw new Error('Um erro na consulta findTodos', err.stack);//
        })
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
        }).catch(function (err) {
            throw new Error('Um erro na consulta findAllTodosFromUser', err.stack);//
        })
        return Todos;
    }

    async deleteByIdTodo(todoObject) {
        const todo = await ModelUser.findByPk(todoObject.id);
        //console.log(user)
        if (todo != null) {
            const received = todo.destroy();
            return received;
        }
        return null;
    }


}

module.exports = { RepositoryTodos };