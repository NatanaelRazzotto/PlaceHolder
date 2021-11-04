const { FetchCommentsUseCase } = require('../../../../src/application/useCase/commentsUseCase/fetchCommentsUseCase');
const { RequestService } = require('../../../../src/servicesApplication/requestService');

describe('FetchCommentsUseCase', () => {
    beforeEach(() => {
        fetchCommentsUseCase = new FetchCommentsUseCase(new RequestService());
    });

    it('fetchRequest para o Parametro', async () => {
        const data = {
            urlFecth: 'https://jsonplaceholder.typicode.com/posts',
            urlIndice: 1,
            urlFilter: 'comments'
        };
        const received = await fetchCommentsUseCase.fetchRequestForParameter(data);
        console.log(received);
        expect(received).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    postId: expect.any(Number),
                    id: expect.any(Number),
                    name: expect.any(String),
                    email: expect.any(String),
                    body: expect.any(String)
                })
            ]))
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
