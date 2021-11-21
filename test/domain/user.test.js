const { User } = require('../../src/domain/user');

describe('Domain model-User', () => {
    it('create User', async () => {
        let id = 80;
        let name = 'Natanael Test';
        let email = 'natanael@gmail.com';
        let addressId = 1;
        let phone = '(41)3589-7988';
        let website = 'natanael.com';
        let companyId = 1;
        const user = new User(id, name, email, addressId, phone, website, companyId);
        console.log(user);
        expect(user).toEqual(
            expect.objectContaining({
                id: expect.any(Number),
                name: expect.any(String),
                email: expect.any(String),
                addressId: expect.any(Number),
                phone: expect.any(String),
                website: expect.any(String),
                companyId: expect.any(Number)
            }));
    });
})