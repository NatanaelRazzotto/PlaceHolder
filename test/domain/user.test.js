const { User } = require('../../src/domain/user');

describe('Domain model-User', () => {
    it('create User', async () => {
        let userId = 8;
        let id = 80;
        let title = 'id nihil reprehenderit';

        const user = new User(userId, id, title);
        console.log(user);
        expect(album).toEqual(
            expect.objectContaining({
                name: expect.any(String),
                email: expect.any(String),
                addressId: expect.any(Number),
                phone: expect.any(String),
                website: expect.any(String),
                companyId =  expect.any(Number),
                id: expect.any(Number),
                userId: expect.any(Number),
                title: expect.any(String),
            }));
    });
})