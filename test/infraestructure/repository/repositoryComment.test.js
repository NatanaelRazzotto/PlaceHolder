const { RepositoryComment } = require('../../../src/infrastructure/repository/repositoryComment');
const database = require('../../../src/infrastructure/sequelize/db');
require('dotenv').config();

describe('Repository Comment', () => {
    let repositoryComment;
    beforeEach(() => {
        repositoryComment = new RepositoryComment();
    });

    it('Sync DB', async () => {
        const received = await database.sync();
        console.log(received);
        expect(received.config.database).toEqual(process.env.DB_NAME);
    });
    it('create Comment', async () => {
        try {
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
        } catch (error) {
            console.error(error.message);
        }
    });
    it('create Comment - NEW', async () => {
        try {
            const comment = {
                postId: 2000,
                id: 1,
                name: "id labore ex et quam laborum",
                email: "Eliseo@gardner.biz",
                body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
            };
            const received = await repositoryComment.create(comment);
            console.log(received);
            expect(received).toEqual({
                postId: 2000,
                id: 1,
                name: "id labore ex et quam laborum",
                email: "Eliseo@gardner.biz",
                body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
                updatedAt: expect.any(Date),
                createdAt: expect.any(Date),
            });
        } catch (error) {
            console.error(error.message);
        }
    });
    it('create Comment - Find Error', async () => {
        try {
            const comment = {
                postId: 2000,
                id: 1,
                name: "id labore ex et quam laborum",
                email: "Eliseo@gardner.biz",
                body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
            };
            const received = await repositoryComment.create(comment);
            console.log(received);
            expect(received).toEqual(null);
        } catch (error) {
            console.error(error.message);
        }
    });

    it('Pesquisar - findComment', async () => {
        const searchObject = {
            postId: 1,
            id: 1,
            name: "id labore ex et quam laborum",
            email: "Eliseo@gardner.biz",
            body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
        };
        try {
            const received = await repositoryComment.findComment(searchObject);
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
        } catch (error) {
            console.error(error.message);
        }

    });
    it('Pesquisar - findComment - ERROR', async () => {
        const searchObject = {
            postId: 1,
            id: 'NS',
            name: "id labore ex et quam laborum",
            email: "Eliseo@gardner.biz",
            body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
        };
        try {
            await repositoryComment.findComment(searchObject);
        } catch (error) {
            expect(error.message).toBe('Um erro na consulta findComment');
        }

    });
    it('Pesquisar - findAlCommentFromPost', async () => {
        const searchObject = {
            postId: 1,
            id: 1
        };
        try {
            const received = await repositoryComment.findAlCommentFromPost(searchObject);
            console.log(received);
            expect(received).toEqual(
                expect.arrayContaining([
                    expect.objectContaining({
                        postId: 1,
                        id: 1,
                        name: "id labore ex et quam laborum",
                        email: "Eliseo@gardner.biz",
                        body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
                        updatedAt: expect.any(Date),
                        createdAt: expect.any(Date),
                    })
                ])
            );
        }
        catch (error) {
            console.error(error.message);
        }
    });

    it('Pesquisar - findAlCommentFromPost - ERROR', async () => {
        const searchObject = {
            postId: 'F',
            id: 1
        };
        try {
            await repositoryComment.findAlCommentFromPost(searchObject);
        }
        catch (error) {
            expect(error.message).toBe('Um erro na consulta findAlCommentFromPost');
        }
    });
})