const { RepositoryTodos } = require('../../repository/sequelize/repositoryClass/repositoryTodos');

class PostTodosUseCase {
    constructor() {
        this.repositoryTodos = new RepositoryTodos();
    }
    async execute(dataTodos) {
        return await this.preparCreateRegisterDB(dataTodos);
    }
    async preparCreateRegisterDB(dataTodos) {
        const todosObject = this.preparObject(dataTodos);
        const todosPersistido = await this.repositoryTodos.create(todosObject);
        return todosPersistido;
    }

    preparObject(dataTodos) {
        const Object = {
            id: dataTodos.id,
            userId: dataTodos.userId,
            title: dataTodos.title,
            completed: dataTodos.completed,
        }
        return Object;
    }
}

module.exports = { PostTodosUseCase };