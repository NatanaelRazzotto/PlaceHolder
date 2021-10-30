const { RepositoryTodos } = require('../../../infrastructure/repository/repositoryTodos');
const { Todos } = require('../../../domain/todos');
class CreateTodosUseCase {
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

    preparObject({ id, userId, title, completed }) {
        const objectTodos = new Todos(id, userId, title, completed)
        /*const Object = {
            id: dataTodos.id,
            userId: dataTodos.userId,
            title: dataTodos.title,
            completed: dataTodos.completed,
        }*/
        return objectTodos;
    }
}

module.exports = { CreateTodosUseCase };