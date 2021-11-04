const { CreateAlbumUseCase } = require('../../../../src/application/useCase/albumsUseCase/createAlbumUseCase');
const { RequestService } = require('../../../../src/servicesApplication/requestService');

describe('CreateAlbumUseCase', () => {
    beforeEach(() => {
        createAlbumUseCase = new CreateAlbumUseCase(new RequestService());
    });

    it('preparCreateRegisterDB - create Album', async () => {
        const album = {
            userId: 1,
            id: 1,
            title: "quidem molestiae enim"
        };
        const received = await createAlbumUseCase.preparCreateRegisterDB(album);
        console.log(received);
        expect(received).toEqual({
            userId: 1,
            id: 1,
            title: "quidem molestiae enim",
            updatedAt: expect.any(Date),
            createdAt: expect.any(Date),
        });
    });

    it('preparObject - create Album', async () => {
        const album = {
            userId: 1,
            id: 1,
            title: "quidem molestiae enim"
        };
        const received = await createAlbumUseCase.preparObject(album);
        console.log(received);
        expect(received).toEqual(
            expect.objectContaining({
                id: expect.any(Number),
                userId: expect.any(Number),
                title: expect.any(String),
            }));
    });

})