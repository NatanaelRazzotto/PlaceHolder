const { CreatePhotosUseCase } = require('../../../../src/application/useCase/photosUseCase/createPhotosUseCase');
const { RequestService } = require('../../../../src/servicesApplication/requestService');
const { RepositoryPhoto } = require('../../../../src/infrastructure/repository/repositoryPhoto');

describe('CreatePhotosUseCase', () => {
    let createPhotosUseCase;
    let Dependencias = {
        requestService: new RequestService(),
        repositoryPhoto: new RepositoryPhoto(),
    }
    beforeEach(() => {
        createPhotosUseCase = new CreatePhotosUseCase(Dependencias);
    });

    it('preparCreateRegisterDB - create photo', async () => {
        const photoConfig = {
            albumId: 1,
            id: 1,
            title: "accusamus beatae ad facilis cum similique qui sunt",
            url: "https://via.placeholder.com/600/92c952",
            thumbnailUrl: "https://via.placeholder.com/150/92c952"
        };
        const received = await createPhotosUseCase.preparCreateRegisterDB(photoConfig);
        console.log(received);
        expect(received).toEqual({
            albumId: 1,
            id: 1,
            title: "accusamus beatae ad facilis cum similique qui sunt",
            url: "https://via.placeholder.com/600/92c952",
            thumbnailUrl: "https://via.placeholder.com/150/92c952",
            updatedAt: expect.any(Date),
            createdAt: expect.any(Date)
        });
    });

    it('preparObject - create photo', async () => {
        const photoConfig = {
            albumId: 1,
            id: 1,
            title: "accusamus beatae ad facilis cum similique qui sunt",
            url: "https://via.placeholder.com/600/92c952",
            thumbnailUrl: "https://via.placeholder.com/150/92c952"
        };
        const received = await createPhotosUseCase.preparObject(photoConfig);
        console.log(received);
        expect(received).toEqual(
            expect.objectContaining({
                albumId: expect.any(Number),
                id: expect.any(Number),
                title: expect.any(String),
                url: expect.any(String),
                thumbnailUrl: expect.any(String)
            }));
    });

})