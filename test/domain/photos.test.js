const { Photo } = require('../../src/domain/photo');

describe('Domain model-Photo', () => {
    it('create Album', async () => {
        let albumId = 1;
        let id = 1;
        let title = 'accusamus beatae ad facilis cum similique qui sunt';
        let url = 'https://via.placeholder.com/600/92c952';
        let thumbnailUrl = 'https://via.placeholder.com/150/92c952';

        const photo = new Photo(id, albumId, title, url, thumbnailUrl);
        console.log(photo);
        expect(photo).toEqual(
            expect.objectContaining({
                id: expect.any(Number),
                albumId: expect.any(Number),
                title: expect.any(String),
                url: expect.any(String),
                thumbnailUrl: expect.any(String),
            }));
    });
})