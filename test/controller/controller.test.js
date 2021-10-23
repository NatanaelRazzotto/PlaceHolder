
const { Controller } = require('../../src/controller/controller')

describe('Controller', () => {

    let controller;
    beforeAll(() => {
        controller = new Controller();
    });
    it('Persistencia de Dados', async () => {
        const maxData = 10;
        const received = await controller.persistenceData(maxData);
        console.log(received);
        expect(received).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    id: expect.any(Number),
                    name: expect.any(String),
                    email: expect.any(String),
                    addressId: expect.any(Number),
                    phone: expect.any(String),
                    website: expect.any(String),
                    companyId: expect.any(Number),
                    updatedAt: expect.any(Date),
                    createdAt: expect.any(Date),
                })
            ])
        )
    })
})