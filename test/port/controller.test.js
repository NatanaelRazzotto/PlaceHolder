
const { Controller } = require('../../src/port/controller/controller')

describe('Controller', () => {
    let controller;
    beforeAll(() => {
        controller = new Controller();
    });
    it('Persistencia de Dados Usuário', async () => {
        const maxData = 10;
        const received = await controller.FetchCreateDataUsers(maxData);
        console.log(received);
        /* expect(received).toEqual(
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
         )*/
    });
    it('Get dados Album', async () => {
        const data = {
            id: 1
        };
        const received = await controller.getDataAlbumDependences(data);
        console.log(received);
    });

})