const { FetchAlbumsUseCase } = require('../../../src/useCase/albumsUseCase/fetchAlbumsUseCase');
const { RequestService } = require('../../../src/servicesApplication/requestService');

describe('FetchAlbumsUseCase', () => {
    beforeEach(() => {
        fetchAlbumsUseCase = new FetchAlbumsUseCase(new RequestService());
    });

    it('Reguisicao para albuns', async () => {
        const dataConfig = {
            urlFecth: 'https://jsonplaceholder.typicode.com/albums',
            indicelimite: 50,
        };
        const receivedData = await fetchAlbumsUseCase.fetchRequest(dataConfig);
        console.log(receivedData);
        expect(receivedData.length).toEqual(dataConfig.indicelimite);
        expect(receivedData).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    userId: expect.any(Number),
                    id: expect.any(Number),
                    title: expect.any(String),
                })
            ])
        )
    })
})