const { Comment } = require('../../src/domain/comment');

describe('Domain model-Comment', () => {

    it('create Comment', async () => {
        let postId = 1;
        let id = 1;
        let name = "id labore ex et quam laborum";
        let email = "Eliseo@gardner.biz";
        let body = "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium";

        const comment = new Comment(id, postId, name, email, body);
        console.log(comment);
        expect(comment).toEqual(
            expect.objectContaining({
                id: expect.any(Number),
                userId: expect.any(Number),
                name: expect.any(String),
                email: expect.any(String),
                body: expect.any(String),
            }));
    });
})