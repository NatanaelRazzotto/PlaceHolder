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
            const validate = await this.findByPkTodo(todos);
            if ((validate != null)) {
                const update =  await this.updateByIdTodo(todos,validate);
                return update;
            }
            else {
                const received = await ModelTodos.create(todos);
                return received.dataValues;
            }
        }
        else {
            return null;
            //throw new Error('O User Associado não foi encontrado');//
        }
    }

    async findByPkTodo(todoObject) {
        const todo = await ModelTodos.findByPk(todoObject.id);
        return todo;
    }

    async findTodos(todosObject) {
        const Todos = await ModelTodos.findOne({
            where: {
                id: todosObject.id
            },
            raw: true
        }).then(function (result) {
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
            return result;
        }).catch(function (err) {
            throw new Error('Um erro na consulta findAllTodosFromUser', err.stack);//
        })
        return Todos;
    }

    async deleteByIdTodo(todoObject) {
        const todo = await ModelTodos.findByPk(todoObject.id);
        if (todo != null) {
            const received = todo.destroy();
            return received;
        }
        return null;
    }

    async searchForUpdateByIdTodo(todoObject) {
        const todoToChange = await this.findByPkTodo(todoObject);
        const update =  await this.updateByIdTodo(todoObject,todoToChange);
        return update;
    }

    async updateByIdTodo(todoObject,todoToChange) {       

        Object.entries(todoObject).forEach(([key, value]) => {
            todoToChange[key] = value;
        });
    
        const result = await todoToChange.save();
        return result.dataValues;
    }   


}

module.exports = { RepositoryTodos };