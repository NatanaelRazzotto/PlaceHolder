const { PersistsTodosUseCase } = require('../../../../src/application/useCase/todosUseCase/persistsTodosUseCase');
const { RequestService } = require('../../../../src/servicesApplication/requestService');
const { RepositoryTodos } = require('../../../../src/infrastructure/repository/repositoryTodos');

describe('PersistsTodosUseCase', () => {
    let persistsTodosUseCase;
    let Dependencias = {
        requestService: new RequestService(),
        repositoryTodos: new RepositoryTodos(),
    }
    beforeEach(() => {
        persistsTodosUseCase = new PersistsTodosUseCase(Dependencias);
    });
    it('persistence - persistir todos ', async () => {
        const data = {
            urlFecth: 'https://jsonplaceholder.typicode.com/users',
            urlIndice: 1
        };
        const receivedData = await persistsTodosUseCase.persistence(data);
        console.log(receivedData);
        expect(receivedData).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    photoID: expect.any(Number),
                    userId: expect.any(Number),
                    title: expect.any(String),
                    updatedAt: expect.any(Date),
                    createdAt: expect.any(Date),
                })]));

    }, 40000)
    it('persistsTodos - persistir todos ', async () => {
        const photoConfig = {
            userId: 1,
            id: 1,
            title: "delectus aut autem",
            updatedAt: expect.any(Date),
            createdAt: expect.any(Date),
        };
        const receivedData = await persistsTodosUseCase.persistsTodos(photoConfig);
        console.log(receivedData);
        expect(receivedData).toEqual(
            expect.objectContaining({
                photoID: expect.any(Number),
                userId: expect.any(Number),
                title: expect.any(String),
                updatedAt: expect.any(Date),
                createdAt: expect.any(Date),
            }));
    })

})