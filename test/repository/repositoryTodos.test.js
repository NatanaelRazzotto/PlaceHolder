const { RepositoryTodos } = require('../../src/repository/sequelize/repositoryClass/repositoryTodos');
const database = require('../../src/repository/sequelize/db/db');
require('dotenv').config();

describe('Repository Photo', () => {
    const repositoryTodos = new RepositoryTodos();
    it('Sync DB', async () => {
        const received = await database.sync();
        console.log(received);
        expect(received.config.database).toEqual(process.env.DB_NAME);
    });
    it('create Photo', async () => {
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
            updatedAt: expect.any(Date),
            createdAt: expect.any(Date),
        });
    });
})