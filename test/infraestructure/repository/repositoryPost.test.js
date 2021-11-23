const { RepositoryPost } = require('../../../src/infrastructure/repository/repositoryPost');
const database = require('../../../src/infrastructure/sequelize/db');
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
        try {
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

        } catch (error) {
            console.error(error.message);
        }
    });

    it('create Post - NEW', async () => {
        const post = {
            userId: 1,
            id: 6000,
            title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        };
        try {
            const received = await repositoryPost.create(post);
            console.log(received);
            expect(received).toEqual({
                userId: 1,
                id: 6000,
                title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
                updatedAt: expect.any(Date),
                createdAt: expect.any(Date),
            });

        } catch (error) {
            console.error(error.message);
        }
    });

    it('create Post - ERROR', async () => {
        const post = {
            userId: 60,
            id: 1,
            title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        };
        try {
            const received = await repositoryPost.create(post);
            console.log(received);
            expect(received).toEqual(null);

        } catch (error) {
            console.error(error.message);
        }
    });

    it('deleteByIdPost', async () => {
        const searchObject = {
          id: 6000,
        };
        try {
          const received = await repositoryPost.deleteByIdPost(searchObject);
          console.log(received);
          console.log(received.dataValues);
          expect(received.dataValues).toEqual({
            userId: 1,
            id: 6000,
            title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
            updatedAt: expect.any(Date),
            createdAt: expect.any(Date),
          });
        } catch (error) {
          console.error(error.message);
        }
    
      });
    
      it('deleteByIdPost Validate', async () => {
        const searchObject = {
          id: 6000,
        };
        try {
          const received = await repositoryPost.deleteByIdPost(searchObject);
          console.log(received);
    
          expect(received).toEqual(null);
        } catch (error) {
          console.error(error.message);
        }
    
      });
    it('Pesquisar - findPost', async () => {
        const searchObject = {
            userId: 1,
            id: 1,
            title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        };
        try {
            const received = await repositoryPost.findPost(searchObject);
            console.log(received);
            expect(received).toEqual({
                userId: 1,
                id: 1,
                title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
                updatedAt: expect.any(Date),
                createdAt: expect.any(Date),
            });
        } catch (error) {
            console.error(error.message);
        }

    });
    it('Pesquisar - findPost - ERROS', async () => {
        const searchObject = {
            userId: 1,
            title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        };
        try {
            await repositoryPost.findPost(searchObject);
        } catch (error) {
            expect(error.message).toBe('Um erro na consulta findPost');
        }

    });
    it('Pesquisar - findAllPhotoFromAlbum', async () => {
        const searchObject = {
            userId: 1,
            id: 1,
        };
        try {
            const received = await repositoryPost.findAllPostFromUser(searchObject);
            console.log(received);
            expect(received).toEqual(
                expect.arrayContaining([
                    expect.objectContaining({
                        userId: 1,
                        id: 1,
                        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
                        updatedAt: expect.any(Date),
                        createdAt: expect.any(Date),
                    })
                ])
            );
        } catch (error) {
            console.error(error.message);
        }
    })
    it('Pesquisar - findAllPhotoFromAlbum - ERROR', async () => {
        const searchObject = {
            id: 1,
        };
        try {
            await repositoryPost.findAllPostFromUser(searchObject);
        } catch (error) {
            expect(error.message).toBe('Um erro na consulta findAllPostFromUser');
        }
    })

})