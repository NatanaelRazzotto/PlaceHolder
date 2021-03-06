const { CreateUserUseCase } = require('../../../../src/application/useCase/userUseCase/createUserUseCase');
const { RequestService } = require('../../../../src/servicesApplication/requestService');
const { RepositoryUser } = require('../../../../src/infrastructure/repository/repositoryUser');
const { RepositoryAddress } = require('../../../../src/infrastructure/repository/repositoryAndress');
const { RepositoryCompany } = require('../../../../src/infrastructure/repository/repositoryCompany');
//require('iconv-lite').encodingExists('foo')

describe('PostUserUseCase', () => {
  let createUserUseCase;
  let Dependencias = {
    requestService: new RequestService(),
    repositoryUser: new RepositoryUser(),
    repositoryAddress: new RepositoryAddress(),
    repositoryCompany: new RepositoryCompany(),
  }
  beforeAll(() => {
    createUserUseCase = new CreateUserUseCase(Dependencias);
  });

  it('Execute - Requisições simultaneas', async () => {
    const data =
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
    };

    const received = await createUserUseCase.execute(data);
    console.log(received);
    expect(received).toEqual({
      id: expect.any(Number),
      name: 'Leanne Graham',
      email: 'Sincere@april.biz',
      addressId: expect.any(Number),
      phone: '1-770-736-8031 x56442',
      website: 'hildegard.org',
      companyId: expect.any(Number),
      updatedAt: expect.any(Date),
      createdAt: expect.any(Date),
    })
  });

});
