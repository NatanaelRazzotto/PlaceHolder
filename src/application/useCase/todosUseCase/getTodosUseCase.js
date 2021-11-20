//const { RepositoryTodos } = require('../../../infrastructure/repository/repositoryTodos');

class GetTodosUseCase {
    constructor({ repositoryTodos }) {
        this.repositoryTodos = repositoryTodos;
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