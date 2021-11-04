const { Andress } = require('../../src/domain/andress');

describe('Domain model-andress', () => {
    it('create andress', async () => {
        let addressId = 0;
        let street = 'Kulas Light';
        let suite = 'Apt. 556';
        let city = 'Gwenborough';
        let zipcode = '92998-3874';
        let lat = '-37.3159';
        let lng = '81.1496';

        const andress = new Andress(addressId, street, suite, city, zipcode, lat, lng);
        console.log(andress);
        expect(andress).toEqual(
            expect.objectContaining({
                addressId: expect.any(Number),
                street: expect.any(String),
                suite: expect.any(String),
                city: expect.any(String),
                zipcode: expect.any(String),
                lat: expect.any(String),
                lng: expect.any(String),
            }));
    });
})