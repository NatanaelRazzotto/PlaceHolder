const { FetchPhotosUseCase } = require('../../../../src/application/useCase/photosUseCase/fetchPhotosUseCase');
const { RequestService } = require('../../../../src/servicesApplication/requestService');

describe('FetchAlbumsUseCase', () => {
    let fetchPhotosUseCase;
    let Dependencias = {
        requestService: new RequestService(),
    }
    beforeEach(() => {
        fetchPhotosUseCase = new FetchPhotosUseCase(Dependencias);
    });

    it('fetchRequest para o Parametro', async () => {
        const data = {
            urlFecth: 'https://jsonplaceholder.typicode.com/albums',
            urlIndice: 1,
            urlFilter: 'photos'
        };
        const received = await fetchPhotosUseCase.fetchRequestForParameter(data);
        console.log(received);
        expect(received).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    albumId: expect.any(Number),
                    id: expect.any(Number),
                    title: expect.any(String),
                    url: expect.any(String),
                    thumbnailUrl: expect.any(String),
                })
            ]))
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