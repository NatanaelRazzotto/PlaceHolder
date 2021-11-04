const { FetchAlbumsUseCase } = require('../../../../src/application/useCase/albumsUseCase/fetchAlbumsUseCase');
const { RequestService } = require('../../../../src/servicesApplication/requestService');

describe('FetchAlbumsUseCase', () => {
    beforeEach(() => {
        fetchAlbumsUseCase = new FetchAlbumsUseCase(new RequestService());
    });

    it('fetchRequestForParameter - Obter album do usuario ', async () => {

        const dataConfig = {
            urlFecth: 'https://jsonplaceholder.typicode.com/users',
            urlIndice: 1,
            urlFilter: 'albums'
        };
        const receivedData = await fetchAlbumsUseCase.fetchRequestForParameter(dataConfig);
        console.log(receivedData);
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

    it('fetchRequest - Obter album aleatorio ', async () => {
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