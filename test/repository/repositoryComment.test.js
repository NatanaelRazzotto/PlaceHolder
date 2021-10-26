const { RepositoryComment } = require('../../src/repository/sequelize/repositoryClass/repositoryComment');
const database = require('../../src/repository/sequelize/db/db');
require('dotenv').config();

describe('Repository Comment', () => {
    const repositoryComment = new RepositoryComment();
    it('Sync DB', async () => {
        const received = await database.sync();
        console.log(received);
        expect(received.config.database).toEqual(process.env.DB_NAME);
    });
    it('create Comment', async () => {
        const comment = {
            postId: 1,
            id: 1,
            name: "id labore ex et quam laborum",
            email: "Eliseo@gardner.biz",
            body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
        };
        const received = await repositoryComment.create(comment);
        console.log(received);
        expect(received).toEqual({
            postId: 1,
            id: 1,
            name: "id labore ex et quam laborum",
            email: "Eliseo@gardner.biz",
            body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
            updatedAt: expect.any(Date),
            createdAt: expect.any(Date),
        });
    });
})