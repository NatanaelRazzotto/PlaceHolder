const { Company } = require('../../src/domain/company');

describe('Domain model-Company', () => {
    it('create Company', async () => {
        let userId = 8;
        let id = 80;
        let title = 'id nihil reprehenderit';

        const album = new Album(userId, id, title);
        console.log(album);
        expect(album).toEqual(
            expect.objectContaining({
                id: expect.any(Number),
                userId: expect.any(Number),
                title: expect.any(String),
            }));
    });
})