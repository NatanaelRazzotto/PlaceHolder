const { RepositoryPhoto } = require('../../../src/infrastructure/repository/repositoryPhoto');
const database = require('../../../src/infrastructure/sequelize/db');
require('dotenv').config();

describe('Repository Photo', () => {
    const repositoryPhoto = new RepositoryPhoto();
    it('Sync DB', async () => {
        const received = await database.sync();
        console.log(received);
        expect(received.config.database).toEqual(process.env.DB_NAME);
    });
    it('create Photo', async () => {
        const photo = {
            albumId: 1,
            id: 1,
            title: "accusamus beatae ad facilis cum similique qui sunt",
            url: "https://via.placeholder.com/600/92c952",
            thumbnailUrl: "https://via.placeholder.com/150/92c952"
        };
        const received = await repositoryPhoto.create(photo);
        console.log(received);
        expect(received).toEqual({
            albumId: 1,
            id: 1,
            title: "accusamus beatae ad facilis cum similique qui sunt",
            url: "https://via.placeholder.com/600/92c952",
            thumbnailUrl: "https://via.placeholder.com/150/92c952",
            updatedAt: expect.any(Date),
            createdAt: expect.any(Date),
        });
    });
})