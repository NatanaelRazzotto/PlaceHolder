const { PersistsUserUseCase } = require('../../../../src/application/useCase/userUseCase/persistsUserUseCase');
const { RequestService } = require('../../../../src/servicesApplication/requestService');

describe('persistsUserUseCase', () => {
  const requestService = new RequestService();
  let persistsUserUseCase;
  beforeAll(() => {
    persistsUserUseCase = new PersistsUserUseCase(requestService);
  });

  it('Execute - persistir user', async () => {
    const data = {
      max: 2,
    };
    const received = await persistsUserUseCase.execute(data);
    console.log(received);
    expect(received).toBeTruthy();
  }, 500000);

  /* it('persistence - persistir user ', async () => {
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
 
   }, 40000)
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
   })*/





});
