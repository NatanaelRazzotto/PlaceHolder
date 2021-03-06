const { FetchUserUseCase } = require('../../../../src/application/useCase/userUseCase/fetchUserUseCase');
const { RequestService } = require('../../../../src/servicesApplication/requestService');

describe('FetchUserUseCase', () => {
  let fetchUserUseCase;
  let Dependencias = {
    requestService: new RequestService(),
  }
  beforeAll(() => {
    fetchUserUseCase = new FetchUserUseCase(Dependencias);
  });

  it('Execute - Requisições simultaneas', () => {
    const data = {
      url: 'https://jsonplaceholder.typicode.com/users',
      max: 10,
    };
    const received = fetchUserUseCase.execute(data);
    expect(received).toBeTruthy();
  });

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
  });

  it('FetchRequest 2 sequencial', async () => {
    const data = {
      url: 'https://jsonplaceholder.typicode.com/users',
      max: 3,
      generate: true
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
  });

  it('FetchRequest ZERO', async () => {
    const data = {
      url: 'https://jsonplaceholder.typicode.com/users',
      max: 0,
    };
    const received = await fetchUserUseCase.fetchRequest(data);
    console.log(received);
    expect(received).toEqual(expect.arrayContaining([]));
  });

});
