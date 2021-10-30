const { FetchPostUseCase } = require('../../../../src/application/useCase/postsUseCase/fetchPostsUseCase');
const { RequestService } = require('../../../../src/servicesApplication/requestService');

describe('FetchPostUseCase', () => {
  let fetchPostUseCase;
  beforeEach(() => {
    fetchPostUseCase = new FetchPostUseCase(new RequestService());
  });

  it('fetchRequest para o Parametro', async () => {
    const data = {
      urlFecth: 'https://jsonplaceholder.typicode.com/users',
      urlIndice: 1,
      urlFilter: 'posts'
    };
    const received = await fetchPostUseCase.execute(data);
    console.log(received);
    expect(received.length).toEqual(10);
    expect(received).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          userId: expect.any(Number),
          id: expect.any(Number),
          title: expect.any(String),
          body: expect.any(String)
        })
      ])
    )
  });

  it('fetchRequest Indexado', async () => {
    const data = {
      url: 'https://jsonplaceholder.typicode.com/posts',
      max: 50,
    };
    const received = await fetchPostUseCase.fetchRequest(data);
    console.log(received);
    expect(received.length).toEqual(50);
    expect(received).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          userId: expect.any(Number),
          id: expect.any(Number),
          title: expect.any(String),
          body: expect.any(String)
        })
      ])
    )
  });
});
