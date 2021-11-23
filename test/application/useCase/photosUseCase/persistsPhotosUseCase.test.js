const { PersistsPhotosUseCase } = require('../../../../src/application/useCase/photosUseCase/persistsPhotosUseCase');
const { RequestService } = require('../../../../src/servicesApplication/requestService');
const { RepositoryPhoto } = require('../../../../src/infrastructure/repository/repositoryPhoto');

describe('PersistsPhotosUseCase', () => {
    let persistsPhotosUseCase;
    let Dependencias = {
        requestService: new RequestService(),
        repositoryPhoto: new RepositoryPhoto(),
    }
    beforeEach(() => {
        persistsPhotosUseCase = new PersistsPhotosUseCase(Dependencias);
    });
    it('persistence - persistir album ', async () => {
        const data = {
            urlFecth: 'https://jsonplaceholder.typicode.com/albums',
            urlIndice: 1
        };
        const receivedData = await persistsPhotosUseCase.persistence(data);
        console.log(receivedData);
        expect(receivedData).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    albumId: expect.any(Number),
                    photoID: expect.any(Number),
                    title: expect.any(String),
                    updatedAt: expect.any(Date),
                    createdAt: expect.any(Date),
                })]));

    }, 4000)
    it('persistsPhotos - persistir post ', async () => {
        const photoConfig = {
            albumId: 1,
            id: 1,
            title: "accusamus beatae ad facilis cum similique qui sunt",
            url: "https://via.placeholder.com/600/92c952",
            thumbnailUrl: "https://via.placeholder.com/150/92c952"
        };
        const receivedData = await persistsPhotosUseCase.persistsPhotos(photoConfig);
        console.log(receivedData);
        expect(receivedData).toEqual(
            expect.objectContaining({
                albumId: expect.any(Number),
                photoID: expect.any(Number),
                title: expect.any(String),
                updatedAt: expect.any(Date),
                createdAt: expect.any(Date),
            }));
    })

})