const { RepositoryAlbum } = require('../../src/repository/sequelize/repositoryClass/repositoryAlbum');
const database = require('../../src/repository/sequelize/db/db');
const { ModelAlbum } = require('../../src/repository/sequelize/models/modelAlbum');
require('dotenv').config();

describe('Repository Album', () => {
    const repositoryAlbum = new RepositoryAlbum();
    it('Sync DB', async () => {
        const received = await database.sync();
        console.log(received);
        expect(received.config.database).toEqual(process.env.DB_NAME);
    });
    it('create Album', async () => {
        const album = {
            userId: 1,
            id: 1,
            title: "quidem molestiae enim"
        };
        const received = await repositoryAlbum.create(album);
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