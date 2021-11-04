const { CreatePostsUseCase } = require('../../../../src/application/useCase/postsUseCase/createPostsUseCase');
const { RequestService } = require('../../../../src/servicesApplication/requestService');

describe('CreatePostsUseCase', () => {
    beforeEach(() => {
        createPostsUseCase = new CreatePostsUseCase(new RequestService());
    });

    it('preparCreateRegisterDB - create Post', async () => {
        const postConfig = {
            userId: 1,
            id: 1,
            title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        };
        const received = await createPostsUseCase.preparCreateRegisterDB(postConfig);
        console.log(received);
        expect(received).toEqual({
            userId: 1,
            id: 1,
            title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
            updatedAt: expect.any(Date),
            createdAt: expect.any(Date)
        });
    });

    it('preparObject - create Album', async () => {
        const postConfig = {
            userId: 1,
            id: 1,
            title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        };
        const received = await createPostsUseCase.preparObject(postConfig);
        console.log(received);
        expect(received).toEqual(
            expect.objectContaining({
                id: expect.any(Number),
                userId: expect.any(Number),
                title: expect.any(String),
                body: expect.any(String)
            }));
    });

})