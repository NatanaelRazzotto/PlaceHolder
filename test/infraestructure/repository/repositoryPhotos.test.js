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
        try {
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
        }
        catch (error) {
            console.error(error.message);
        }
    });
    it('create Photo - NEW', async () => {
        const photo = {
            albumId: 1,
            id: 10050,
            title: "accusamus beatae ad facilis cum similique qui sunt",
            url: "https://via.placeholder.com/600/92c952",
            thumbnailUrl: "https://via.placeholder.com/150/92c952"
        };
        try {
            const received = await repositoryPhoto.create(photo);
            console.log(received);
            expect(received).toEqual({
                albumId: 1,
                id: 10050,
                title: "accusamus beatae ad facilis cum similique qui sunt",
                url: "https://via.placeholder.com/600/92c952",
                thumbnailUrl: "https://via.placeholder.com/150/92c952",
                updatedAt: expect.any(Date),
                createdAt: expect.any(Date),
            });
        }
        catch (error) {
            console.error(error.message);
        }
    });
    it('create Photo - ERROR', async () => {
        const photo = {
            albumId: 60,
            id: 10050,
            title: "accusamus beatae ad facilis cum similique qui sunt",
            url: "https://via.placeholder.com/600/92c952",
            thumbnailUrl: "https://via.placeholder.com/150/92c952"
        };
        try {
            const received = await repositoryPhoto.create(photo);
            expect(received).toEqual(null);
        }
        catch (error) {
            console.error(error.message);
        }
    });

    it('Pesquisar - findPhoto', async () => {
        const searchObject = {
            albumId: 1,
            id: 1,
            title: "accusamus beatae ad facilis cum similique qui sunt",
            url: "https://via.placeholder.com/600/92c952",
            thumbnailUrl: "https://via.placeholder.com/150/92c952"
        };
        try {
            const received = await repositoryPhoto.findPhoto(searchObject);
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
        }
        catch (error) {
            console.error(error.message);
        }

    });
    it('Pesquisar - findPhoto - ERROR', async () => {
        const searchObject = {
            albumId: 1,
            title: "accusamus beatae ad facilis cum similique qui sunt",
            url: "https://via.placeholder.com/600/92c952",
            thumbnailUrl: "https://via.placeholder.com/150/92c952"
        };
        try {
            await repositoryPhoto.findPhoto(searchObject);
        } catch (error) {
            expect(error.message).toBe('Um erro na consulta findPhoto');
        }

    });
    it('Pesquisar - findAllPhotoFromAlbum', async () => {
        const searchObject = {
            albumId: 1,
            id: 1,
        };
        try {
            const received = await repositoryPhoto.findAllPhotoFromAlbum(searchObject);
            console.log(received);
            expect(received).toEqual(
                expect.arrayContaining([
                    expect.objectContaining({
                        albumId: 1,
                        id: 1,
                        title: "accusamus beatae ad facilis cum similique qui sunt",
                        url: "https://via.placeholder.com/600/92c952",
                        thumbnailUrl: "https://via.placeholder.com/150/92c952",
                        updatedAt: expect.any(Date),
                        createdAt: expect.any(Date),
                    })
                ])
            );
        }
        catch (error) {
            console.error(error.message);
        }
    })
    it('Pesquisar - findAllPhotoFromAlbum - ERROR', async () => {
        const searchObject = {
            id: 1,
        };
        try {
            const received = await repositoryPhoto.findAllPhotoFromAlbum(searchObject);
        } catch (error) {
            expect(error.message).toBe('Um erro na consulta findAllPhotoFromAlbum');
        }

    })
})