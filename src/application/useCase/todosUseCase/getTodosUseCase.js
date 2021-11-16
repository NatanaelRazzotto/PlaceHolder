const { RepositoryTodos } = require('../../../infrastructure/repository/repositoryTodos');

class GetTodosUseCase {
    constructor() {
        this.repositoryTodos = new RepositoryTodos();
    }
    async execute(dataTodos) {
        return await this.getRegisterInDB(dataTodos);
    }
    async getRegisterInDB(dataTodos) {
        const todosPersistido = await this.repositoryTodos.findAllTodosFromUser(dataTodos);
        return todosPersistido;
    }
}

module.exports = { GetTodosUseCase };