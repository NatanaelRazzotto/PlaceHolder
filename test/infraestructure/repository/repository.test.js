const { RepositoryAlbum } = require('../../../src/infrastructure/repository/repositoryAlbum');
const database = require('../../../src/infrastructure/sequelize/db');
require('dotenv').config();

describe('Repository Album', () => {
    const repositoryAlbum = new RepositoryAlbum();
    it('Sync DB', async () => {
        const received = await database.sync();
        console.log(received);
        expect(received.config.database).toEqual(process.env.DB_NAME);
    });
    it('create album', async () => {
        const user = {
            userId: 1,
            id: 1,
            title: "quidem molestiae enim"
        };
        const received = await repositoryAlbum.create(user);
        console.log(received);
        expect(received).toEqual({
            userId: 1,
            id: 1,
            title: "quidem molestiae enim",
            updatedAt: expect.any(Date),
            createdAt: expect.any(Date),
        });
    });
})