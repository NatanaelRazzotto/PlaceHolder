const { RepositoryAddress } = require('../../../src/infrastructure/repository/repositoryAndress');
const database = require('../../../src/infrastructure/sequelize/db');
require('dotenv').config();

describe('Repository Andress', () => {
    let repositoryAddress;
    beforeEach(() => {
        repositoryAddress = new RepositoryAddress();
    });
    it('Sync DB', async () => {
        const received = await database.sync();
        console.log(received);
        expect(received.config.database).toEqual(process.env.DB_NAME);
    });
    it('create Andress', async () => {
        try {
            const Andress = {
                addressId: 1,
                street: "Kulas Light",
                suite: "Apt. 556",
                city: "Gwenborough",
                zipcode: "92998-3874",
                lat: "-37.3159",
                lng: "81.1496",
            };
            const received = await repositoryAddress.create(Andress);
            console.log(received);
            expect(received).toEqual({
                addressId: 1,
                street: "Kulas Light",
                suite: "Apt. 556",
                city: "Gwenborough",
                zipcode: "92998-3874",
                lat: "-37.3159",
                lng: "81.1496",
                updatedAt: expect.any(Date),
                createdAt: expect.any(Date),
            });
        } catch (error) {
            console.error(error.message);
        }
    });
    it('create Andress - NEW', async () => {
        try {
            const Andress = {
                addressId: 5000,
                street: "Kulas Light",
                suite: "Apt. 556",
                city: "Gwenborough",
                zipcode: "92998-3874",
                lat: "-99.2035",
                lng: "99.3354",
            };
            const received = await repositoryAddress.create(Andress);
            console.log(received);
            expect(received).toEqual({
                addressId: 5000,
                street: "Kulas Light",
                suite: "Apt. 556",
                city: "Gwenborough",
                zipcode: "92998-3874",
                lat: "-99.2035",
                lng: "99.3354",
                updatedAt: expect.any(Date),
                createdAt: expect.any(Date),
            });
        } catch (error) {
            console.error(error.message);
        }
    });

    it('deleteByIdAddress', async () => {
        const searchObject = {
            addressId: 5000,
        };
        try {
          const received = await repositoryAddress.deleteByIdAddress(searchObject);
          console.log(received);
          console.log(received.dataValues);
          expect(received.dataValues).toEqual({
            addressId: 5000,
            street: "Kulas Light",
            suite: "Apt. 556",
            city: "Gwenborough",
            zipcode: "92998-3874",
            lat: "-99.2035",
            lng: "99.3354",
            updatedAt: expect.any(Date),
            createdAt: expect.any(Date),
          });
        } catch (error) {
          console.error(error.message);
        }
    
    });
    
    it('deleteByIdAddress Validate', async () => {
        const searchObject = {
            addressId: 5000,
        };
        try {
          const received = await repositoryAddress.deleteByIdAddress(searchObject);
          console.log(received);
    
          expect(received).toEqual(null);
        } catch (error) {
          console.error(error.message);
        }
    
    });

    it('findAndress', async () => {
        const Andress = {
            lat: "-37.3159",
            lng: "81.1496",
        };
        try {
            const received = await repositoryAddress.findAndress(Andress);
            console.log(received);
            expect(received).toEqual({
                addressId: 1,
                street: "Kulas Light",
                suite: "Apt. 556",
                city: "Gwenborough",
                zipcode: "92998-3874",
                lat: "-37.3159",
                lng: "81.1496",
                updatedAt: expect.any(Date),
                createdAt: expect.any(Date),
            });
        } catch (error) {
            console.error(error.message);
        }
    });

    it('findAndress - ERROR', async () => {
        const Andress = {
            lat: "-37.3159",
        };
        try {
            await repositoryAddress.findAndress(Andress);
        } catch (error) {
            expect(error.message).toBe('Um erro na consulta findAndress');
        }
    });

    it('findAndressID', async () => {
        const Andress = {
            addressId: 1,
        };
        try {
            const received = await repositoryAddress.findAndressID(Andress);
            console.log(received);
            expect(received).toEqual({
                addressId: 1,
                street: "Kulas Light",
                suite: "Apt. 556",
                city: "Gwenborough",
                zipcode: "92998-3874",
                lat: "-37.3159",
                lng: "81.1496",
                updatedAt: expect.any(Date),
                createdAt: expect.any(Date),
            });
        } catch (error) {
            console.error(error.message);
        }
    });
    it('findAndressID - ERROR', async () => {
        const Andress = {}
        try {
            await repositoryAddress.findAndressID(Andress);
        } catch (error) {
            expect(error.message).toBe('Um erro na consulta findAndressID');
        }
    });
})