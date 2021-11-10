const { RepositoryTodos } = require('../../../src/infrastructure/repository/repositoryTodos');
const database = require('../../../src/infrastructure/sequelize/db');
require('dotenv').config();

describe('Repository Photo', () => {
    const repositoryTodos = new RepositoryTodos();
    it('Sync DB', async () => {
        const received = await database.sync();
        console.log(received);
        expect(received.config.database).toEqual(process.env.DB_NAME);
    });
    it('create Todos', async () => {
        const Todos = {
            userId: 1,
            id: 1,
            title: "delectus aut autem",
            completed: false
        };
        const received = await repositoryTodos.create(Todos);
        console.log(received);
        expect(received).toEqual({
            userId: 1,
            id: 1,
            title: "delectus aut autem",
            completed: 0,
            updatedAt: expect.any(Date),
            createdAt: expect.any(Date),
        });
    });
    it('Pesquisar - findTodos', async () => {
        const searchObject = {
            userId: 1,
            id: 1,
            title: "delectus aut autem",
            completed: false
        };
        const received = await repositoryTodos.findTodos(searchObject);
        console.log(received);
        expect(received).toEqual({
            userId: 1,
            id: 1,
            title: "delectus aut autem",
            completed: 0,
            updatedAt: expect.any(Date),
            createdAt: expect.any(Date),
        });

    });
    it('Pesquisar - findAllTodosFromUser', async () => {
        const searchObject = {
            userId: 1,
            id: 1,
        };
        const received = await repositoryTodos.findAllTodosFromUser(searchObject);
        console.log(received);
        expect(received).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    userId: 1,
                    id: 1,
                    title: "delectus aut autem",
                    completed: 0,
                    updatedAt: expect.any(Date),
                    createdAt: expect.any(Date),
                })
            ])
        );
    })
})