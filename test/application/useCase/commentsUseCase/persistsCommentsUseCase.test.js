const { PersistsCommentsUseCase } = require('../../../../src/application/useCase/commentsUseCase/persistsCommentsUseCase');
const { RequestService } = require('../../../../src/servicesApplication/requestService');
const { RepositoryComment } = require('../../../../src/infrastructure/repository/repositoryComment');

describe('PersistsCommentsUseCase', () => {
    let persistsCommentsUseCase;
    let Dependencias = {
        requestService: new RequestService(),
        repositoryComment: new RepositoryComment(),
    }
    beforeEach(() => {
        persistsCommentsUseCase = new PersistsCommentsUseCase(Dependencias);
    });
    it('persistence - persistir album ', async () => {
        const data = {
            urlFecth: 'https://jsonplaceholder.typicode.com/posts',
            urlIndice: 1
        };
        const receivedData = await persistsCommentsUseCase.persistence(data);
        console.log(receivedData);
        expect(receivedData).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    commentID: expect.any(Number),
                    postId: expect.any(Number),
                    name: expect.any(String),
                    updatedAt: expect.any(Date),
                    createdAt: expect.any(Date),
                })]));

    }, 4000)
    it('persistsComments - persistir post ', async () => {
        const postConfig = {
            postId: 1,
            id: 1,
            name: "id labore ex et quam laborum",
            email: "Eliseo@gardner.biz",
            body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
        };
        const receivedData = await persistsCommentsUseCase.persistsComments(postConfig);
        console.log(receivedData);
        expect(receivedData).toEqual(
            expect.objectContaining({
                commentID: expect.any(Number),
                postId: expect.any(Number),
                name: expect.any(String),
                updatedAt: expect.any(Date),
                createdAt: expect.any(Date),
            }));
    })

})