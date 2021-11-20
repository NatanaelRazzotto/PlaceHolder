const { CreateTodosUseCase } = require('../../../../src/application/useCase/todosUseCase/createTodosUseCase');
const { RequestService } = require('../../../../src/servicesApplication/requestService');
const { RepositoryTodos } = require('../../../../src/infrastructure/repository/repositoryTodos');

describe('CreateTodosUseCase', () => {
    let createTodosUseCase;
    let Dependencias = {
        requestService: new RequestService(),
        repositoryTodos: new RepositoryTodos(),
    }
    beforeEach(() => {
        createTodosUseCase = new CreateTodosUseCase(Dependencias);
    });

    it('preparCreateRegisterDB - create photo', async () => {
        const photoConfig = {
            userId: 1,
            id: 1,
            title: "delectus aut autem",
            completed: false
        };
        const received = await createTodosUseCase.preparCreateRegisterDB(photoConfig);
        console.log(received);
        expect(received).toEqual({
            userId: 1,
            id: 1,
            completed: 0,
            title: "delectus aut autem",
            updatedAt: expect.any(Date),
            createdAt: expect.any(Date),
        });
    });

    it('preparObject - create todos', async () => {
        const todoConfig = {
            userId: 1,
            id: 1,
            title: "delectus aut autem",
            completed: false
        };
        const received = await createTodosUseCase.preparObject(todoConfig);
        console.log(received);
        expect(received).toEqual(
            {
                userId: expect.any(Number),
                id: expect.any(Number),
                completed: false,
                title: expect.any(String)
            });
    });

})