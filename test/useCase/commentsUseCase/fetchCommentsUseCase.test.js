const { FetchCommentsUseCase } = require('../../../src/useCase/commentsUseCase/fetchCommentsUseCase');
const { RequestService } = require('../../../src/servicesApplication/requestService');

describe('FetchCommentsUseCase', () => {
    beforeEach(() => {
        fetchCommentsUseCase = new FetchCommentsUseCase(new RequestService());
    });

    it('Reguisicao para comments', async () => {
        const dataConfig = {
            urlFecth: 'https://jsonplaceholder.typicode.com/comments',
            limite: 20,
        };
        const receivedData = await fetchCommentsUseCase.fetchDataRequest(dataConfig);
        console.log(receivedData);
        expect(receivedData.length).toEqual(20);
        expect(receivedData).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    postId: expect.any(Number),
                    id: expect.any(Number),
                    name: expect.any(String),
                    email: expect.any(String),
                    body: expect.any(String)
                })
            ]))

    })
})
