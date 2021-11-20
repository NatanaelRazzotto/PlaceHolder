const { CreateCommentsUseCase } = require('../../../../src/application/useCase/commentsUseCase/createCommentsUseCase');
const { RequestService } = require('../../../../src/servicesApplication/requestService');
const { RepositoryComment } = require('../../../../src/infrastructure/repository/repositoryComment');

describe('CreateCommentsUseCase', () => {
    let createCommentsUseCase;
    let Dependencias = {
        requestService: new RequestService(),
        repositoryComment: new RepositoryComment(),
    }
    beforeEach(() => {
        createCommentsUseCase = new CreateCommentsUseCase(Dependencias);
    });

    it('preparCreateRegisterDB - create Post', async () => {
        const commentConfig = {
            postId: 1,
            id: 1,
            name: "id labore ex et quam laborum",
            email: "Eliseo@gardner.biz",
            body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
        };
        const received = await createCommentsUseCase.preparCreateRegisterDB(commentConfig);
        console.log(received);
        expect(received).toEqual({
            postId: 1,
            id: 1,
            name: "id labore ex et quam laborum",
            email: "Eliseo@gardner.biz",
            body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
            updatedAt: expect.any(Date),
            createdAt: expect.any(Date)
        });
    });

    it('preparObject - create Album', async () => {
        const postConfig = {
            postId: 1,
            id: 1,
            name: "id labore ex et quam laborum",
            email: "Eliseo@gardner.biz",
            body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
        };
        const received = await createCommentsUseCase.preparObject(postConfig);
        console.log(received);
        expect(received).toEqual(
            expect.objectContaining({
                id: expect.any(Number),
                postId: expect.any(Number),
                name: expect.any(String),
                email: expect.any(String),
                body: expect.any(String),
            }));
    });

})