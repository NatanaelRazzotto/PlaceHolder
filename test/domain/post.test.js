const { Post } = require('../../src/domain/post');

describe('Domain model-Post', () => {
    it('create Post', async () => {
        let userId = 1;
        let id = 1;
        let title = "sunt aut facere repellat provident occaecati excepturi optio reprehenderit";
        let body = "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto";

        const post = new Post(id, userId, title, body);
        console.log(post);
        expect(post).toEqual(
            expect.objectContaining({
                id: expect.any(Number),
                userId: expect.any(Number),
                title: expect.any(String),
                body: expect.any(String),
            }));
    });
})