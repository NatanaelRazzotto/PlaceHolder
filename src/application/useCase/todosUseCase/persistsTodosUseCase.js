
const { CreateTodosUseCase } = require('./createTodosUseCase');
const { FetchTodosUseCase } = require('./fetchTodosUseCase');

class PersistsTodosUseCase {
    constructor(requestService) {
        //this.requestService = requestService;
        this.createTodosUseCase = new CreateTodosUseCase(requestService);
        this.fetchTodosUseCase = new FetchTodosUseCase(requestService);
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
            updatedAt: populado.updatedAt,
            createdAt: populado.createdAt
        };
        return todosDTO;
    }

}

module.exports = { PersistsTodosUseCase };

