const { RepositoryPost } = require('../../src/repository/sequelize/repositoryClass/repositoryPost');
const database = require('../../src/repository/sequelize/db/db');
require('dotenv').config();

describe('Repository Post', () => {
    const repositoryPost = new RepositoryPost();
    it('Sync DB', async () => {
        const received = await database.sync();
        console.log(received);
        expect(received.config.database).toEqual(process.env.DB_NAME);
    });
    it('create Post', async () => {
        const post = {
            userId: 1,
            id: 1,
            title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        };
        const received = await repositoryPost.create(post);
        console.log(received);
        expect(received).toEqual({
            userId: 1,
            id: 1,
            title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
            updatedAt: expect.any(Date),
            createdAt: expect.any(Date),
        });
    });
})