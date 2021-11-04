const { FetchTodosUseCase } = require('../../../../src/application/useCase/todosUseCase/fetchTodosUseCase');
const { RequestService } = require('../../../../src/servicesApplication/requestService');

describe('FetchTodosUseCase', () => {
    beforeEach(() => {
        fetchTodosUseCase = new FetchTodosUseCase(new RequestService());
    });

    it('fetchRequest para o Parametro', async () => {
        const data = {
            urlFecth: 'https://jsonplaceholder.typicode.com/users',
            urlIndice: 1,
            urlFilter: 'todos'
        };
        const received = await fetchTodosUseCase.fetchRequestForParameter(data);
        console.log(received);
        expect(received).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    userId: expect.any(Number),
                    id: expect.any(Number),
                    title: expect.any(String),
                    completed: expect.any(Boolean)
                })
            ]))
    });

    it('Reguisicao para Todos', async () => {
        const dataConfig = {
            urlFecth: 'https://jsonplaceholder.typicode.com/todos',
            indicelimite: 50,
        };
        const receivedData = await fetchTodosUseCase.fetchRequest(dataConfig);
        console.log(receivedData);
        expect(receivedData.length).toEqual(dataConfig.indicelimite);
        expect(receivedData).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    userId: expect.any(Number),
                    id: expect.any(Number),
                    title: expect.any(String),
                    completed: expect.any(Boolean)
                })
            ])
        )
    })
})