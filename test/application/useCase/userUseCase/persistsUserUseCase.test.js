const { PersistsUserUseCase } = require('../../../../src/application/useCase/userUseCase/persistsUserUseCase');
const { RequestService } = require('../../../../src/servicesApplication/requestService');

describe('persistsUserUseCase', () => {
  const requestService = new RequestService();
  let persistsUserUseCase;
  beforeAll(() => {
    persistsUserUseCase = new PersistsUserUseCase(requestService);
  });

  it('Execute - Requisições simultaneas', async () => {
    const data = {
      max: 10,
    };
    const received = await persistsUserUseCase.execute(data);
    console.log(received);
    expect(received).toBeTruthy();
  }, 50000);

  /* describe('FetchRequest', () => {
     it('FetchRequest 10', async () => {
       const data = {
         url: 'https://jsonplaceholder.typicode.com/users',
         max: 10,
       };
       const received = await fetchUserUseCase.fetchRequest(data);
       console.log(received);
       expect(received).toEqual(
         expect.arrayContaining([
           expect.objectContaining({
             id: expect.any(Number),
           }),
         ])
       );
     });*/


});
