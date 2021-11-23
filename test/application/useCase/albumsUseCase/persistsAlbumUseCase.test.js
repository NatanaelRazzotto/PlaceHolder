const { PersistsAlbumUseCase } = require('../../../../src/application/useCase/albumsUseCase/persistsAlbumUseCase');
const { RequestService } = require('../../../../src/servicesApplication/requestService');
const { RepositoryAlbum } = require('../../../../src/infrastructure/repository/repositoryAlbum');
const { RepositoryPhoto } = require('../../../../src/infrastructure/repository/repositoryPhoto');

describe('persistsAlbumUseCase', () => {
    let persistsAlbumUseCase;
    let Dependencias = {
        requestService: new RequestService(),
        repositoryAlbum: new RepositoryAlbum(),
        repositoryPhoto: new RepositoryPhoto(),
    }
    beforeEach(() => {
        persistsAlbumUseCase = new PersistsAlbumUseCase(Dependencias);
    });
    it('persistence - persistir album ', async () => {
        const data = {
            urlFecth: 'https://jsonplaceholder.typicode.com/users',
            urlIndice: 1
        };
        const receivedData = await persistsAlbumUseCase.persistence(data);
        console.log(receivedData);
        expect(receivedData).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    albumID: expect.any(Number),
                    userId: expect.any(Number),
                    title: expect.any(String),
                    updatedAt: expect.any(Date),
                    createdAt: expect.any(Date),
                    dependentes: expect.any(Object),
                    // depentes: expect.arrayContaining(expect.any(a))//[expect.objectContaining({ albumID: expect.any(Object) })]
                })]));
        console.log(receivedData.depentes);

    }, 4000)
    it('persistsAlbum - Pesiste Album e Fotos', async () => {
        const album = {
            userId: 1,
            id: 1,
            title: "quidem molestiae enim"
        };
        const receivedData = await persistsAlbumUseCase.persistsAlbum(album);
        console.log(receivedData);
        expect(receivedData).toEqual({
            albumID: expect.any(Number),
            userId: expect.any(Number),
            title: expect.any(String),
            updatedAt: expect.any(Date),
            createdAt: expect.any(Date),
            dependentes: expect.any(Object)//expect.any(Array)
        });
        expect(receivedData.dependentes.pesistPhoto).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    albumId: expect.any(Number),
                    photoID: expect.any(Number),
                    title: expect.any(String),
                    updatedAt: expect.any(Date),
                    createdAt: expect.any(Date),
                })]));
    })
    it('persistsDependentes - Persistir Photos  ', async () => {
        const albumConfig = {
            id: 1
        };
        const receivedData = await persistsAlbumUseCase.persistsDependentes(albumConfig);
        console.log(receivedData);
        expect(receivedData.pesistPhoto).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    albumId: expect.any(Number),
                    photoID: expect.any(Number),
                    title: expect.any(String),
                    updatedAt: expect.any(Date),
                    createdAt: expect.any(Date),
                })]));
    })

})