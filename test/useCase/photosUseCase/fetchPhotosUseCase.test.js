const { FetchPhotosUseCase } = require('../../../src/useCase/photosUseCase/fetchPhotosUseCase');
const { RequestService } = require('../../../src/servicesApplication/requestService');

describe('FetchAlbumsUseCase', () => {
    beforeEach(() => {
        fetchPhotosUseCase = new FetchPhotosUseCase(new RequestService());
    });

    it('Reguisicao para albuns', async () => {
        const dataConfig = {
            urlFecth: 'https://jsonplaceholder.typicode.com/photos',
            indicelimite: 50,
        };
        const receivedData = await fetchPhotosUseCase.fetchRequest(dataConfig);
        console.log(receivedData);
        expect(receivedData.length).toEqual(dataConfig.indicelimite);
        expect(receivedData).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    albumId: expect.any(Number),
                    id: expect.any(Number),
                    title: expect.any(String),
                    url: expect.any(String),
                    thumbnailUrl: expect.any(String),
                })
            ])
        )
    })
})