const { RepositoryAlbum } = require('../../../src/infrastructure/repository/repositoryAlbum');
const database = require('../../../src/infrastructure/sequelize/db');
const { ModelAlbum } = require('../../../src/infrastructure/sequelize/models/modelAlbum');
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
    it('Pesquisar - findAlbum', async () => {
        const searchObject = {
            userId: 1,
            id: 1,
            title: "quidem molestiae enim",
        };
        const received = await repositoryAlbum.findAlbum(searchObject);
        console.log(received);
        expect(received).toEqual({
            userId: 1,
            id: 1,
            title: "quidem molestiae enim",
            updatedAt: expect.any(Date),
            createdAt: expect.any(Date),
        });

    });
    it('Pesquisar - findAlbumFromUser', async () => {
        const searchObject = {
            userId: 1,
            id: 1
        };
        const received = await repositoryAlbum.findAlbumFromUser(searchObject);
        console.log(received);
        expect(received).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    userId: 1,
                    id: 1,
                    title: "quidem molestiae enim",
                    updatedAt: expect.any(Date),
                    createdAt: expect.any(Date),
                })
            ])
        );

    });

})