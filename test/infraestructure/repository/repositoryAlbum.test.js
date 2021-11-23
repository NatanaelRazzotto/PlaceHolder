const { RepositoryAlbum } = require('../../../src/infrastructure/repository/repositoryAlbum');
//const { RepositoryUser } = require('../../../src/infrastructure/repository/repositoryUser');
const database = require('../../../src/infrastructure/sequelize/db');
const { ModelAlbum } = require('../../../src/infrastructure/sequelize/models/modelAlbum');
require('dotenv').config();

describe('Repository Album', () => {
    /*let Dependencias = {
        repositoryUser: new RepositoryUser()
    }*/
    let repositoryAlbum;
    beforeEach(() => {
        repositoryAlbum = new RepositoryAlbum();
    });

    it('Sync DB', async () => {
        const received = await database.sync();
        console.log(received);
        expect(received.config.database).toEqual(process.env.DB_NAME);
    });
    it('createAlbum -find ERROR User', async () => {
        const album = {
            userId: 50,
            id: 1,
            title: "quidem molestiae enim"
        };
        try {
            const received = await repositoryAlbum.create(album);
            expect(received).toEqual(null);
        } catch (error) {
            console.error(error.message);
            expect(error.message).toBe('Um erro na consulta findUser');
        }
    });
    it('createAlbum - Verifica já incluso', async () => {
        try {
            const album = {
                userId: 1,
                id: 1,
                title: "quidem molestiae enim"
            };
            const received = await repositoryAlbum.create(album);
            console.log(received);
            expect(received).toEqual({
                userId: album.userId,
                id: album.id,
                title: album.title,
                updatedAt: expect.any(Date),
                createdAt: expect.any(Date),
            });
        } catch (error) {
            console.error(error.message);
        }
    });
    it('createAlbum - Criar album Usuario Novo', async () => {
        try {
            const album = {
                userId: 1,
                id: 9999,
                title: "Album Teste"
            };
            const received = await repositoryAlbum.create(album);
            console.log(received);
            expect(received).toEqual({
                userId: album.userId,
                id: album.id,
                title: album.title,
                updatedAt: expect.any(Date),
                createdAt: expect.any(Date),
            });
        } catch (error) {
            console.error(error.message);
        }
    });
    it('deleteByIdAlbum', async () => {
        const album = {
            userId: 1,
            id: 9999,
            title: "Album Teste"
        };
        const searchObject = {
            id: 9999,
        };
        try {
          const received = await repositoryAlbum.deleteByIdAlbum(searchObject);
          console.log(received);
          console.log(received.dataValues);
          expect(received.dataValues).toEqual({
            userId: album.userId,
            id: album.id,
            title: album.title,
            updatedAt: expect.any(Date),
            createdAt: expect.any(Date),
          });
        } catch (error) {
          console.error(error.message);
        }
    
    });
    
    it('deleteByIdAlbum Validate', async () => {
        const searchObject = {
            id: 9999,
        };
        try {
          const received = await repositoryAlbum.deleteByIdAlbum(searchObject);
          console.log(received);
    
          expect(received).toEqual(null);
        } catch (error) {
          console.error(error.message);
        }
    
    });

    it('Pesquisar - findAlbum', async () => {
        try {
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
        } catch (error) {
            console.error(error.message);
        }

    });
    it('Pesquisar - findAlbum ERROR', async () => {
        const searchObject = {
            userId: 1,
            title: "quidem molestiae enim",
        };
        try {
            await repositoryAlbum.findAlbum(searchObject);//repositoryAlbum.findAlbum(searchObject);
        } catch (error) {
            console.error(error.message);//, error.stack); // It goes here!
            //console.error("ocorreu um erro com o findAlbumFromUser");//, error.stack); // It goes here!
            expect(error.message).toBe('Um erro na consulta findAlbum');
        }
    });
    it('Pesquisar - findAlbumFromUser', async () => {
        try {
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
        } catch (error) {
            console.error(error.message);
        }

    });

    it('Pesquisar - findAlbumFromUser ERROR', async () => {
        const searchObject = {
            id: 1
        };
        try {
            await repositoryAlbum.findAlbumFromUser(searchObject);
        } catch (error) {
            console.error(error.message);
            expect(error.message).toBe('Um erro na consulta findAlbumFromUser');
        }
    });

})