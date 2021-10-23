const { FetchPostUseCase } = require('../../../src/useCase/postsUseCase/fetchPostUseCase');
const { RequestService } = require('../../../src/servicesApplication/requestService');

describe('FetchPostUseCase', () => {
  let fetchPostUseCase;
  beforeEach(() => {
    fetchPostUseCase = new FetchPostUseCase(new RequestService());
  });

  it('fetchRequest Generate', async () => {
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
