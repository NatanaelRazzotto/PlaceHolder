const { PersistsUserUseCase } = require('../../../../src/application/useCase/userUseCase/persistsUserUseCase');
const { RequestService } = require('../../../../src/servicesApplication/requestService');
const { RepositoryUser } = require('../../../../src/infrastructure/repository/repositoryUser');
const { RepositoryAddress } = require('../../../../src/infrastructure/repository/repositoryAndress');
const { RepositoryCompany } = require('../../../../src/infrastructure/repository/repositoryCompany');
const { RepositoryPost } = require('../../../../src/infrastructure/repository/repositoryPost');
const { RepositoryComment } = require('../../../../src/infrastructure/repository/repositoryComment');
const { RepositoryAlbum } = require('../../../../src/infrastructure/repository/repositoryAlbum');
const { RepositoryPhoto } = require('../../../../src/infrastructure/repository/repositoryPhoto');
const { RepositoryTodos } = require('../../../../src/infrastructure/repository/repositoryTodos');

describe('persistsUserUseCase', () => {
  let persistsUserUseCase;
  let Dependencias = {
    requestService: new RequestService(),
    repositoryUser: new RepositoryUser(),
    repositoryAddress: new RepositoryAddress(),
    repositoryCompany: new RepositoryCompany(),
    repositoryPost: new RepositoryPost(),
    repositoryComment: new RepositoryComment(),
    repositoryAlbum: new RepositoryAlbum(),
    repositoryPhoto: new RepositoryPhoto(),
    repositoryTodos: new RepositoryTodos(),
  }
  beforeAll(() => {
    persistsUserUseCase = new PersistsUserUseCase(Dependencias);
  });

  it('Execute - persistir user', async () => {
    const data = {
      max: 3,
      generate: false
    };
    const received = await persistsUserUseCase.execute(data);
    console.log(received);
    expect(received).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          userId: expect.any(Number),
          addressId: expect.any(Number),
          companyId: expect.any(Number),
          name: expect.any(String),
          dependentes: expect.any(Object),
          updatedAt: expect.any(Date),
          createdAt: expect.any(Date),
        })
      ]))
    expect(received).toBeTruthy();
  }, 11000);//500000

  /* it('persistsAlbum - Pesiste Album e Fotos', async () => {
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
})*/





});
