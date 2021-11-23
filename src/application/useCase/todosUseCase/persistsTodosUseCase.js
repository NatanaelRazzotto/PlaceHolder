
const { CreateTodosUseCase } = require('./createTodosUseCase');
const { FetchTodosUseCase } = require('./fetchTodosUseCase');

class PersistsTodosUseCase {
    constructor(Dependencias) {
        this.createTodosUseCase = new CreateTodosUseCase(Dependencias);
        this.fetchTodosUseCase = new FetchTodosUseCase(Dependencias);
    }

    async execute(param) {
        return await this.persistence(param);
    }

    async persistence({ urlFecth, urlIndice }) {
        const persistenceTodos = [];
        const data = {
            urlFecth: urlFecth,
            urlIndice: urlIndice,
            urlFilter: 'todos'
        };
        const fetchTodos = await this.fetchTodosUseCase.execute(data);
        for (const element of fetchTodos) {
            const populado = this.persistsTodos(element);
            persistenceTodos.push(populado);
        }
        const Todos = await Promise.all(persistenceTodos);
        return Todos;

    }
    async persistsTodos(Todos) {
        let populado = await this.createTodosUseCase.execute(Todos);
        const todosDTO = {
            photoID: populado.id,
            userId: populado.userId,
            title: populado.title,
            completed: populado.completed,
            updatedAt: populado.updatedAt,
            createdAt: populado.createdAt
        };
        return todosDTO;
    }

}

module.exports = { PersistsTodosUseCase };

