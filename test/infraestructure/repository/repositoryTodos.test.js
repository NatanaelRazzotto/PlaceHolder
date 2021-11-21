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
        try {
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
        } catch (error) {
            console.error(error.message);
        }
    });
    it('create Todos - NEW', async () => {
        const Todos = {
            userId: 1,
            id: 600,
            title: "delectus aut autem",
            completed: false
        };
        try {
            const received = await repositoryTodos.create(Todos);
            console.log(received);
            expect(received).toEqual({
                userId: 1,
                id: 600,
                title: "delectus aut autem",
                completed: 0,
                updatedAt: expect.any(Date),
                createdAt: expect.any(Date),
            });
        } catch (error) {
            console.error(error.message);
        }
    });
    it('create Todos - ERROR', async () => {
        const Todos = {
            userId: 1000,
            id: 1,
            title: "delectus aut autem",
            completed: false
        };
        try {
            const received = await repositoryTodos.create(Todos);
            expect(received).toEqual(null);
        } catch (error) {
            console.error(error.message);
        }
    });
    it('Pesquisar - findTodos', async () => {
        const searchObject = {
            userId: 1,
            id: 1,
            title: "delectus aut autem",
            completed: false
        };
        try {
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
        } catch (error) {
            console.error(error.message);
        }

    });
    it('Pesquisar - findTodos - ERROR', async () => {
        const searchObject = {
            userId: 1,
            title: "delectus aut autem",
            completed: false
        };
        try {
            await repositoryTodos.findTodos(searchObject);
        } catch (error) {
            expect(error.message).toBe('Um erro na consulta findTodos');
        }

    });
    it('Pesquisar - findAllTodosFromUser', async () => {
        const searchObject = {
            userId: 1,
            id: 1,
        };
        try {
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
        } catch (error) {
            console.error(error.message);
        }
    })
    it('Pesquisar - findAllTodosFromUser - ERROR', async () => {
        const searchObject = {
            id: 1,
        };
        try {
            await repositoryTodos.findAllTodosFromUser(searchObject);

        } catch (error) {
            expect(error.message).toBe('Um erro na consulta findAllTodosFromUser');
        }
    })
})