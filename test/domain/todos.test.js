const { Todos } = require('../../src/domain/todos');

describe('Domain model-Todos', () => {
    it('create Todos', async () => {
        let userId = 8;
        let id = 80;
        let title = 'id nihil reprehenderit';

        const todos = new Todos(userId, id, title);
        console.log(todos);
        expect(todos).toEqual(
            expect.objectContaining({
                id: expect.any(Number),
                userId: expect.any(Number),
                title: expect.any(String),
                //completed: expect.any(Boolean),
                //id, userId, title, completed
            }));
    });
})