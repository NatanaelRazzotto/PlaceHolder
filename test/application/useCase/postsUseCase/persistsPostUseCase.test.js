const { PersistsPostUseCase } = require('../../../../src/application/useCase/postsUseCase/persistsPostUseCase');
const { RequestService } = require('../../../../src/servicesApplication/requestService');
const { RepositoryPost } = require('../../../../src/infrastructure/repository/repositoryPost');
const { RepositoryComment } = require('../../../../src/infrastructure/repository/repositoryComment');

describe('persistsAlbumUseCase', () => {
    let persistsPostUseCase;
    let Dependencias = {
        requestService: new RequestService(),
        repositoryPost: new RepositoryPost(),
        repositoryComment: new RepositoryComment(),
    }
    beforeEach(() => {
        persistsPostUseCase = new PersistsPostUseCase(Dependencias);
    });
    it('persistence - persistir album ', async () => {
        const data = {
            urlFecth: 'https://jsonplaceholder.typicode.com/users',
            urlIndice: 1
        };
        const receivedData = await persistsPostUseCase.persistence(data);
        console.log(receivedData);
        expect(receivedData).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    postID: expect.any(Number),
                    userId: expect.any(Number),
                    title: expect.any(String),
                    updatedAt: expect.any(Date),
                    createdAt: expect.any(Date),
                    dependentes: expect.any(Object),

                })]));

    }, 4000)
    it('persistsAlbum - persistir post ', async () => {
        const postConfig = {
            userId: 1,
            id: 1,
            title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        };
        const receivedData = await persistsPostUseCase.persistsPost(postConfig);
        console.log(receivedData);
        expect(receivedData).toEqual(
            expect.objectContaining({
                postID: expect.any(Number),
                userId: expect.any(Number),
                title: expect.any(String),
                dependentes: expect.any(Object),
                updatedAt: expect.any(Date),
                createdAt: expect.any(Date),
            }));
    })
    it('persistsDependentes - persistir post ', async () => {
        const config = {
            id: 1
        };
        const receivedData = await persistsPostUseCase.persistsDependentes(config);
        console.log(receivedData);
        expect(receivedData.Comments).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    postId: expect.any(Number),
                    commentID: expect.any(Number),
                    name: expect.any(String),
                    updatedAt: expect.any(Date),
                    createdAt: expect.any(Date),
                })]));
    })


})